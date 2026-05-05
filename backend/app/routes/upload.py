from fastapi import APIRouter, UploadFile, File
import shutil
import os

from app.services.pdf_service import extract_text_from_pdf
from app.services.ai_service import generate_financial_summary

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"{UPLOAD_DIR}/{file.filename}"

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text
    text = extract_text_from_pdf(file_path)

    # AI Analysis
    summary = generate_financial_summary(text)

    return {
        "filename": file.filename,
        "summary": summary
    }