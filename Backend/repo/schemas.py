from pydantic import BaseModel
        
class User(BaseModel):
    name: str
    email: str
    password: str
    
class GetUser(BaseModel):
    name: str
    email: str
    # blogs: List[Blog] = []
    class Config():
        orm_mode = True
        
class Login(BaseModel):
    username: str
    password: str
    
class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str


class ItemCreate(BaseModel):
    title: str
    description: str