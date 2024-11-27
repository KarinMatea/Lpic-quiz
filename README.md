---

# LPIC 1 Quiz

Dies ist eine interaktive Webanwendung zur Vorbereitung auf die LPIC 1 Zertifizierungsprüfung. Die Anwendung bietet ein Quiz mit zufälligen Fragen, eine Fortschrittsanzeige und die Möglichkeit, Fragen zu markieren und später darauf zurückzukommen. Das Quiz ist lokal über den **localhost** aufrufbar.

---

## **Funktionen**

- **Quiz mit zufälligen Fragen**: Die Fragen werden bei jedem Neustart in zufälliger Reihenfolge angezeigt.
- **Fortschrittsanzeige**: Zeigt den aktuellen Fortschritt (z. B. "Frage 3 von 10") an.
- **Markieren von Fragen**: Markiere Fragen, um später darauf zurückzukommen. Markierte Fragen werden in einem separaten Bereich angezeigt.
- **Statistiken**: Während des Quiz wird die Anzahl der richtigen und falschen Antworten angezeigt.
- **Navigation**: Einfache Navigation zwischen den Fragen mit "Weiter"- und "Zurück"-Buttons.

---

## **Installation**

### Voraussetzungen
- **Python** (Version 3.7 oder höher)
- **Pip** (Python-Paketmanager)

### Schritte
1. **Repository klonen**:
   ```bash
   git clone https://github.com/KarinMatea/lpic-quiz.git
   cd lpic-quiz
   ```

2. **Benötigte Pakete installieren**:
   ```bash
   pip install flask
   ```

3. **Anwendung starten**:
   ```bash
   python app.py
   ```

4. **Quiz im Browser öffnen**:
   - Gehe zu [http://127.0.0.1:5000](http://127.0.0.1:5000), um das Quiz zu starten.

---

## **Projektstruktur**

```
lpic1-quiz/
├── app.py                  # Flask-Backend
├── questions.json          # JSON-Datei mit Fragen und Antworten
├── static/
│   ├── styles.css          # CSS-Datei für das Design
│   └── popup.js            # JavaScript-Datei für die Interaktivität
└── templates/
    └── quiz.html           # HTML-Datei für das Frontend
```

---

## **Verwendung**
1. Starte die Anwendung mit dem Befehl:
   ```bash
   python app.py
   ```
2. Öffne die Seite [http://127.0.0.1:5000](http://127.0.0.1:5000) in deinem Browser.
3. Beantworte die Fragen, navigiere mit "Weiter" und "Zurück", und markiere Fragen, die du später bearbeiten möchtest.

---

## **Technologien**
- **Python**: Backend-Logik mit Flask.
- **HTML/CSS/JavaScript**: Frontend-Design und Interaktivität.
- **JSON**: Speicherung der Fragen und Antworten.

---

## **Zukünftige Erweiterungen**
- Integration von weiteren Fragen und Kategorien.

---
