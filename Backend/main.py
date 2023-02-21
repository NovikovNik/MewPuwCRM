from lib2to3.pytree import Base
from repo.schemas import *
from repo.models import *
from utils.database import engine
from fastapi.middleware.cors import CORSMiddleware
from routers import user, login
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI


Base.metadata.create_all(engine)

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