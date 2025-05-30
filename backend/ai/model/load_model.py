from transformers import AutoModelForSeq2SeqLM, AutoTokenizer

model_name = "sarthak0226/flan-t5-large-mentalchat"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

model.save_pretrained("../model") 
tokenizer.save_pretrained("../model/tokenizer") 

print("Model training selesai dan disimpan!")