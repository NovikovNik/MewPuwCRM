from sqlalchemy import MetaData
from utils.hashing import Hash
from repo.schemas import *
from repo.models import *
from utils.database import engine
from fastapi.middleware.cors import CORSMiddleware
from routers import user, login
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI


app = FastAPI()
app.include_router(user.router)
app.include_router(login.router)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost",
    "https://localhost:8000",
    "http://localhost",
    "https://localhost",
    "http://localhost:8000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    if debug := True == True:
        Base.metadata.drop_all(engine)  # Убрать позже
        user = User(name="HeadAdmin", password=Hash.bcrypt(
        "Test"), email="test@test.com")
    metadata_obj = MetaData()
    metadata_obj.create_all(engine)