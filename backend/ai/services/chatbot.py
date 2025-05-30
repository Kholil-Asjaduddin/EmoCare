import os
from transformers import AutoModelForSeq2SeqLM, T5Tokenizer

MODEL_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'model'))

tokenizer = T5Tokenizer.from_pretrained(MODEL_DIR, local_files_only=True, use_fast=False)
model = AutoModelForSeq2SeqLM.from_pretrained(MODEL_DIR, local_files_only=True)

def generate_response(text):
    inputs = tokenizer(text, return_tensors="pt")
    output = model.generate(**inputs, max_length=128)
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return response