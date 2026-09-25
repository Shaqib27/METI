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
    # Save resume record
    # --------------------------------------------------------

    resume = Resume(
        user_id=user_id,
        filename=file.filename,
        file_path=str(file_path),
        file_type=file_extension.replace(".", ""),
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
    }