from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)

# Funktion: Fragen aus der JSON-Datei laden
def load_questions():
    with open('questions.json', encoding='utf-8') as f:
        return json.load(f)

# Lade die Fragen in den Speicher
questions = load_questions()

# Route: Hauptseite des Quiz
@app.route('/')
def quiz():
    return render_template('quiz.html')

# API-Route: Fragen als JSON zurückgeben
@app.route('/api/questions')
def get_questions():
    return jsonify(questions)

# Startpunkt der Anwendung
if __name__ == '__main__':
    app.run(debug=True)
