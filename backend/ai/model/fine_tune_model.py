import json
from transformers import AutoModelForSeq2SeqLM, AutoTokenizer, TrainingArguments, Trainer

with open("../data/mental-health-conversational-data.json", "r", encoding="utf-8") as f:
    dataset = json.load(f)

model_name = "google/flan-t5-large"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSeq2SeqLM.from_pretrained(model_name)

train_data = [{"input_ids": tokenizer.encode(d["input"], padding="max_length", truncation=True),
               "labels": tokenizer.encode(d["output"], padding="max_length", truncation=True)}
              for d in dataset]

training_args = TrainingArguments(
    output_dir="../models",
    per_device_train_batch_size=4,
    per_device_eval_batch_size=4,
    num_train_epochs=3,
    save_steps=500,
    logging_dir="../logs"
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=train_data,
)

trainer.train()

model.save_pretrained("../models")
print("Fine-tuning selesai dan model telah disimpan!")