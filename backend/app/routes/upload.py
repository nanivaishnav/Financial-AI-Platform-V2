from fastapi import APIRouter, UploadFile, File
import shutil
import os
from datetime import datetime

from app.services.ai_service import (
    extract_text_from_pdf,
    analyze_financial_report
)

router = APIRouter()

UPLOAD_DIR = "uploads"
os.makedirs(UPLOAD_DIR, exist_ok=True)


@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    file_path = f"{UPLOAD_DIR}/{datetime.now().timestamp()}_{file.filename}"

    # Save file
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    # Extract text
    text = extract_text_from_pdf(file_path)

    # AI Analysis
    result = analyze_financial_report(text)

    return {
        "filename": file.filename,
        "analysis": result
    }