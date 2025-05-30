from deep_translator import GoogleTranslator

def translate_to_english(text):
    translator = GoogleTranslator(source='id', target='en')
    return translator.translate(text)