from fastapi import APIRouter, UploadFile, File
from app.services.ai_service import analyze_text

router = APIRouter()

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode("utf-8")

    result = analyze_text(text)

    return {
        "filename": file.filename,
        "analysis": result
    }