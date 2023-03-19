from repo.schemas import *
from repo.models import *
from fastapi.middleware.cors import CORSMiddleware
from routers import user, login, items
from fastapi.security import OAuth2PasswordBearer
from fastapi import FastAPI
from sqlalchemy import create_engine
from repo.models import Base


app = FastAPI()
app.include_router(user.router)
app.include_router(login.router)
app.include_router(items.router)

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

origins = [
    "http://localhost",
    "https://localhost:8000",
    "https://localhost:3000",
    "http://localhost",
    "https://localhost",
    "http://localhost:8000",
    "http://0.0.0.0:8000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def startup():
    SQLALCHEMY_DATABASE_URL = "sqlite:///./database.db"
    engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={
                       "check_same_thread": False})
    if debug := False == True:
        Base.metadata.drop_all(engine)
        Base.metadata.create_all(engine)
