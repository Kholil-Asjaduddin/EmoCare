import json
import kagglehub

path = kagglehub.dataset_download("elvis23/mental-health-conversational-data")
print(f"Dataset berhasil diunduh ke: {path}")

with open(f"{path}/intents.json", "r", encoding="utf-8") as f:
    raw_data = json.load(f)

formatted_data = []
for intent in raw_data["intents"]:
    for pattern in intent["patterns"]:
        for response in intent["responses"]:
            formatted_data.append({"input": pattern, "output": response})

formatted_dataset_path = "../data/mental-health-conversational-data.json"
with open(formatted_dataset_path, "w", encoding="utf-8") as f:
    json.dump(formatted_data, f, indent=4)

print(f"Dataset berhasil diformat dan disimpan di: {formatted_dataset_path}")