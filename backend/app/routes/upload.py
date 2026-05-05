from app.services.ai_service import analyze_text

@router.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    content = await file.read()
    text = content.decode(errors="ignore")

    result = analyze_text(text)

    return {
        "filename": file.filename,
        "analysis": result
    }