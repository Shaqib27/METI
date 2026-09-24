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
from app.schemas.auth import (
    RegisterRequest,
    LoginRequest,
    UserResponse,
    TokenResponse
)
from app.core.security import (
    hash_password,
    verify_password,
    create_access_token,
    verify_access_token
)


router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)


# JWT authentication scheme
security = HTTPBearer()


# ============================================================
# REGISTER
# ============================================================

@router.post(
    "/register",
    response_model=UserResponse,
    status_code=status.HTTP_201_CREATED
)
def register(
    data: RegisterRequest,
    db: Session = Depends(get_db)
):

    # Check if email already exists
    existing_user = (
        db.query(User)
        .filter(User.email == data.email)
        .first()
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered"
        )

    # Hash password
    hashed_password = hash_password(data.password)

    # Create new user
    user = User(
        name=data.name,
        email=data.email,
        password_hash=hashed_password
    )

    # Save user
    db.add(user)
    db.commit()
    db.refresh(user)

    return user


# ============================================================
# LOGIN
# ============================================================

@router.post(
    "/login",
    response_model=TokenResponse
)
def login(
    data: LoginRequest,
    db: Session = Depends(get_db)
):

    # Find user by email
    user = (
        db.query(User)
        .filter(User.email == data.email)
        .first()
    )

    # User doesn't exist
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    # Verify password
    if not verify_password(
        data.password,
        user.password_hash
    ):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password"
        )

    # Create JWT access token
    access_token = create_access_token(user.id)

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }


# ============================================================
# GET CURRENT USER
# ============================================================

@router.get(
    "/me",
    response_model=UserResponse
)
def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db)
):

    # Get JWT token from Authorization header
    token = credentials.credentials

    # Verify JWT and get user ID
    user_id = verify_access_token(token)

    # Find user in database
    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )

    # User no longer exists
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="User not found"
        )

    return user