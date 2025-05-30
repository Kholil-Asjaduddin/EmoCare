from deep_translator import GoogleTranslator

def translate_to_indonesia(text):
    translator = GoogleTranslator(source='en', target='id')
    return translator.translate(text)