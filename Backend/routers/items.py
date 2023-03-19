from fastapi import APIRouter, Depends, HTTPException, status
from utils.database import get_db
from repo import schemas
from repo import models
from sqlalchemy.orm import Session

router = APIRouter(
    prefix="/items",
    tags=["Items"]
)


@router.post('/', status_code=status.HTTP_201_CREATED)
def create_item(request: schemas.ItemCreate, db: Session = Depends(get_db)):
    '''Fast create item'''
    item = models.Item(title=request.title, description=request.description, status=1)
    db.add(item)
    db.commit()
    db.refresh(item)
    return {'message': 'Item added', 'payload': item}


@router.get('/', status_code=status.HTTP_200_OK)
def get_items(db: Session = Depends(get_db)):
    '''Get all items'''
    items = db.query(models.Item).all()
    return items
