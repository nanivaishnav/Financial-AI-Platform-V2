from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import chat

# IMPORT ROUTES
from app.routes import upload

app = FastAPI()
app.include_router(chat.router, prefix="/chat", tags=["Chat"])

# CORS CONFIG
origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ROOT API
@app.get("/")
def root():
    return {"message": "Backend Running"}

# REGISTER ROUTES
app.include_router(upload.router, prefix="/api")