from fastapi import APIRouter

router = APIRouter()

@router.post("/chat")
def chat(data: dict):
    question = data.get("question")

    return {
        "answer": f"AI Response for: {question}"
    }