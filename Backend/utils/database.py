from sqlalchemy import create_engine, MetaData
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from repo.models import Base

SQLALCHEMY_DATABASE_URL = 'sqlite:///./database.db'

engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
session = sessionmaker(bind=engine, autocommit=False, autoflush=False)


def get_db():
    db = session()
    try:
        yield db
    finally:
        db.close()