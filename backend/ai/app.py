from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from services.preprocess import translate_to_english
from services.chatbot import generate_response
from services.postprocess import translate_to_indonesia

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    text: str

@app.post("/chat")
async def chat_endpoint(request: ChatRequest):
    
    en_text = translate_to_english(request.text)
    
    en_response = generate_response(en_text)
    
    id_response = translate_to_indonesia(en_response)
    
    return {"response": id_response}