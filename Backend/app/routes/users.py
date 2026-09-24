from fastapi import (
    APIRouter,
    Depends,
    HTTPException,
    status
)
from fastapi.security import (
    HTTPBearer,
    HTTPAuthorizationCredentials
)
from sqlalchemy.orm import Session

from app.db.database import get_db
from app.db.models import User
from app.schemas.user import (
    UserUpdateRequest,
    UserResponse,
    PasswordChangeRequest
)
from app.core.security import (
    verify_access_token,
    verify_password,
    hash_password
)


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)


security = HTTPBearer()


# ============================================================
# GET CURRENT USER PROFILE
# ============================================================

@router.get(
    "/me",
    response_model=UserResponse
)
def get_my_profile(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):

    # Get token
    token = credentials.credentials

    # Verify token
    user_id = verify_access_token(token)

    # Find user
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    return user


# ============================================================
# UPDATE CURRENT USER PROFILE
# ============================================================

@router.put(
    "/me",
    response_model=UserResponse
)
def update_my_profile(
    data: UserUpdateRequest,
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):

    # Get token
    token = credentials.credentials

    # Verify token
    user_id = verify_access_token(token)

    # Find user
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    # Update name
    if data.name is not None:
        user.name = data.name

    # Update email
    if data.email is not None:

        # Check if another user already has this email
        existing_user = (
            db.query(User)
            .filter(
                User.email == data.email,
                User.id != user_id
            )
            .first()
        )

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered"
            )

        user.email = data.email

    # Save changes
    db.commit()
    db.refresh(user)

    return user


# ============================================================
# CHANGE PASSWORD
# ============================================================

@router.put(
    "/me/password",
    status_code=status.HTTP_200_OK
)
def change_password(
    data: PasswordChangeRequest,
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):

    # Get token
    token = credentials.credentials

    # Verify token
    user_id = verify_access_token(token)

    # Find user
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    # Verify current password
    if not verify_password(
        data.current_password,
        user.password_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Current password is incorrect"
        )

    # Prevent same password
    if data.current_password == data.new_password:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="New password must be different from current password"
        )

    # Hash new password
    new_password_hash = hash_password(
        data.new_password
    )

    # Update password
    user.password_hash = new_password_hash

    # Save changes
    db.commit()

    return {
        "message": "Password changed successfully"
    }