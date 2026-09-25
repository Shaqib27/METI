from pathlib import Path
import uuid

from fastapi import (
    APIRouter,
    Depends,
    File,
    UploadFile,
    HTTPException,
    status,
)
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import Resume
from app.core.security import verify_access_token
from app.services.resume_service import (
    extract_resume_text,
    parse_resume,
)

router = APIRouter(
    prefix="/resume",
    tags=["Resume"],
)

security = HTTPBearer()


UPLOAD_DIR = Path("uploads/resumes")

ALLOWED_EXTENSIONS = {
    ".pdf",
    ".docx",
}


@router.post("/upload")
async def upload_resume(
    file: UploadFile = File(...),
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
):
    # --------------------------------------------------------
    # Verify JWT
    # --------------------------------------------------------

    user_id = verify_access_token(
        credentials.credentials
    )

    # --------------------------------------------------------
    # Validate file
    # --------------------------------------------------------

    if not file.filename:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="No file selected",
        )

    file_extension = Path(file.filename).suffix.lower()

    if file_extension not in ALLOWED_EXTENSIONS:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF and DOCX files are allowed",
        )

    # --------------------------------------------------------
    # Create user-specific upload directory
    # --------------------------------------------------------

    user_upload_dir = UPLOAD_DIR / str(user_id)

    user_upload_dir.mkdir(
        parents=True,
        exist_ok=True,
    )

    # --------------------------------------------------------
    # Generate unique filename
    # --------------------------------------------------------

    unique_filename = (
        f"{uuid.uuid4()}{file_extension}"
    )

    file_path = user_upload_dir / unique_filename

    # --------------------------------------------------------
    # Save file
    # --------------------------------------------------------

    with open(file_path, "wb") as buffer:

        while chunk := await file.read(1024 * 1024):

            buffer.write(chunk)

    # --------------------------------------------------------
    # Extract resume text
    # --------------------------------------------------------

    try:
        extracted_text = extract_resume_text(
            file_path=str(file_path),
            file_type=file_extension,
        )

    except Exception as e:
        # Remove uploaded file if text extraction fails
        if file_path.exists():
            file_path.unlink()

        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Failed to extract resume text: {str(e)}",
        )

    # --------------------------------------------------------
    # Save resume record
    # --------------------------------------------------------

    resume = Resume(
        user_id=user_id,
        filename=file.filename,
        file_path=str(file_path),
        file_type=file_extension.replace(".", ""),
        extracted_text=extracted_text,
    )

    db.add(resume)
    db.commit()
    db.refresh(resume)

    # --------------------------------------------------------
    # Response
    # --------------------------------------------------------

    return {
        "message": "Resume uploaded successfully",
        "resume_id": resume.id,
        "filename": resume.filename,
        "file_type": resume.file_type,
        "text_length": len(extracted_text),
    }

@router.get("/{resume_id}")
def get_resume(
    resume_id: int,
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
):
    # --------------------------------------------------------
    # Verify JWT
    # --------------------------------------------------------

    user_id = verify_access_token(
        credentials.credentials
    )

    # --------------------------------------------------------
    # Find resume belonging to logged-in user
    # --------------------------------------------------------

    resume = (
        db.query(Resume)
        .filter(
            Resume.id == resume_id,
            Resume.user_id == user_id,
        )
        .first()
    )

    if not resume:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Resume not found",
        )

    # --------------------------------------------------------
    # Parse extracted resume text
    # --------------------------------------------------------

    profile = parse_resume(
        resume.extracted_text or ""
    )

    # --------------------------------------------------------
    # Response
    # --------------------------------------------------------

    return {
        "resume_id": resume.id,
        "filename": resume.filename,
        "file_type": resume.file_type,
        "uploaded_at": resume.uploaded_at,
        "profile": profile,
    }