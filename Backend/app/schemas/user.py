from pydantic import BaseModel, EmailStr, Field


class UserUpdateRequest(BaseModel):

    name: str | None = Field(
        default=None,
        min_length=2,
        max_length=100
    )

    email: EmailStr | None = None


class UserResponse(BaseModel):

    id: int
    name: str
    email: EmailStr

    class Config:
        from_attributes = True


class PasswordChangeRequest(BaseModel):

    current_password: str = Field(
        min_length=8,
        max_length=100
    )

    new_password: str = Field(
        min_length=8,
        max_length=100
    )