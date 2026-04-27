from fastapi import FastAPI

app = FastAPI(
    title="Financial AI Platform",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Financial AI Backend Running"
    }