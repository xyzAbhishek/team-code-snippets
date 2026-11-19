from fastapi import APIRouter, status
from pydantic import BaseModel

router = APIRouter(prefix="/items", tags=["Items"])
class ItemIn(BaseModel): name: str; price: float

@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_item(item: ItemIn):
    return {"created": item.model_dump()}