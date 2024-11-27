# LPIC 1 Quiz

Dies ist eine interaktive Webanwendung zur Vorbereitung auf die LPIC 1 Zertifizierungsprüfung. 
Die Anwendung bietet ein Quiz mit zufälligen Fragen, eine Fortschrittsanzeige und die Möglichkeit, Fragen zu markieren und später darauf zurückzukommen.


## Funktionen

- **Quiz mit zufälligen Fragen**: Die Fragen werden bei jedem Neustart in zufälliger Reihenfolge angezeigt.
- **Fortschrittsanzeige**: Der aktuelle Fortschritt wird angezeigt (z. B. "Frage 3 von 10").
- **Markieren von Fragen**: Markiere Fragen, um später darauf zurückzukommen. Markierte Fragen werden in einem separaten Bereich angezeigt.
- **Statistiken**: Zeigt während des Quiz die Anzahl der richtigen und falschen Antworten an.
- **Navigation**: Einfaches Vor- und Zurück-Navigieren zwischen den Fragen.


## Installation

### Voraussetzungen
- **Python** (Version 3.7 oder höher)
- **Pip** (Python-Paketmanager)

## Projektstruktur

lpic1-quiz/
├── app.py                  # Flask-Backend
├── questions.json          # Fragen und Antworten
├── static/
│   ├── styles.css          # CSS-Datei für das Design
│   └── popup.js            # JavaScript für die Interaktivität
└── templates/
    └── quiz.html           # HTML-Datei für das Frontend
