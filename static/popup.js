document.addEventListener("DOMContentLoaded", function () {
    fetch('/api/questions')
        .then(response => response.json())
        .then(questions => {
            let currentQuestion = 0; // Index der aktuellen Frage
            const totalQuestions = questions.length;
            const container = document.getElementById('quiz-container');
            const progressDiv = document.getElementById('progress');
            const markedQuestions = new Set(); // Set für markierte Fragen
            const markedQuestionsList = document.getElementById('marked-questions-list');
            const statsCorrect = document.getElementById('stats-correct');
            const statsWrong = document.getElementById('stats-wrong');
            let correctCount = 0; // Zähler für richtige Antworten
            let wrongCount = 0; // Zähler für falsche Antworten

            progressDiv.innerHTML = `<h4>Frage ${currentQuestion + 1} von ${totalQuestions}</h4>`;

            // Funktion, um den Fortschritt anzuzeigen
            function updateProgress() {
                progressDiv.innerHTML = `<h4>Frage ${currentQuestion + 1} von ${totalQuestions}</h4>`;
            }

            // Funktion, um die Statistiken zu aktualisieren
            function updateStats() {
                statsCorrect.textContent = `Richtig: ${correctCount}`;
                statsWrong.textContent = `Falsch: ${wrongCount}`;
            }

            // Funktion, um die aktuelle Frage anzuzeigen
            function showQuestion(index) {
                container.innerHTML = `
                    <div id="question-${index}">
                        <h3>Frage ${index + 1}: ${questions[index].question}</h3>
                        ${questions[index].options
                            .map(
                                (opt, i) =>
                                    `<button class="btn btn-outline-light my-2 answer-btn" data-index="${i}">${opt}</button>`
                            )
                            .join('')}
                        <div class="text-center mt-3">
                            <button id="mark-btn" class="btn btn-warning me-2">Markieren</button>
                            <button id="back-btn" class="btn btn-secondary me-2" style="display: ${index > 0 ? 'inline-block' : 'none'};">Zurück</button>
                            <button id="next-btn" class="btn btn-primary" style="display: ${index < totalQuestions - 1 ? 'inline-block' : 'none'};">Weiter</button>
                        </div>
                    </div>
                `;

                // Antwort-Buttons aktivieren
                const answerButtons = document.querySelectorAll('.answer-btn');
                answerButtons.forEach(button => {
                    button.addEventListener('click', function () {
                        checkAnswer(index, parseInt(button.dataset.index), questions[index].explanation);
                        answerButtons.forEach(btn => (btn.disabled = true)); // Deaktiviere alle Buttons
                        document.getElementById('next-btn').style.display = 'inline-block'; // Zeige Weiter-Button
                    });
                });

                // Weiter-Button aktivieren
                const nextButton = document.getElementById('next-btn');
                nextButton.addEventListener('click', function () {
                    if (currentQuestion < totalQuestions - 1) {
                        currentQuestion++;
                        showQuestion(currentQuestion); // Zeige nächste Frage
                        updateProgress(); // Fortschritt aktualisieren
                    }
                });

                // Zurück-Button aktivieren
                const backButton = document.getElementById('back-btn');
                if (backButton) {
                    backButton.addEventListener('click', function () {
                        currentQuestion--;
                        showQuestion(currentQuestion); // Zeige vorherige Frage
                        updateProgress();
                    });
                }

                // Markieren-Button aktivieren
                const markButton = document.getElementById('mark-btn');
                markButton.addEventListener('click', function () {
                    markedQuestions.add(index);
                    updateMarkedQuestions(); // Liste der markierten Fragen aktualisieren
                    Swal.fire({
                        title: 'Frage markiert!',
                        text: `Frage ${index + 1} wurde für später markiert.`,
                        icon: 'info',
                        background: '#1d1f21',
                        color: '#c5c8c6',
                        confirmButtonColor: '#81a2be'
                    });
                });
            }

            // Funktion zur Antwortprüfung
            function checkAnswer(questionIndex, selectedOption, explanation) {
                const correctAnswer = questions[questionIndex].answer;
                const isCorrect = selectedOption === correctAnswer;

                // Aktualisiere die Statistiken
                if (isCorrect) {
                    correctCount++;
                } else {
                    wrongCount++;
                }
                updateStats(); // Aktualisiere die Anzeige

                Swal.fire({
                    title: isCorrect ? '✅ Richtig!' : '❌ Falsch!',
                    text: explanation,
                    icon: isCorrect ? 'success' : 'error',
                    background: '#1d1f21',
                    color: '#c5c8c6',
                    confirmButtonColor: '#81a2be'
                });
            }

            // Zeigt eine Zusammenfassung der markierten Fragen an
            function showSummary() {
                const markedList = Array.from(markedQuestions)
                    .map(index => `<li>Frage ${index + 1}: ${questions[index].question}</li>`)
                    .join('');
                container.innerHTML = `
                    <h2 class="text-center text-success">Quiz abgeschlossen! 🎉</h2>
                    <h3 class="text-center text-warning">Markierte Fragen:</h3>
                    <ul class="text-warning">${markedList || '<li>Keine Fragen markiert</li>'}</ul>
                `;
                progressDiv.innerHTML = '';
            }

            // Aktualisiert die Liste der markierten Fragen
            function updateMarkedQuestions() {
                markedQuestionsList.innerHTML = Array.from(markedQuestions)
                    .map(index => `
                        <li class="list-group-item list-group-item-warning">
                            <a href="#" class="text-decoration-none" onclick="showMarkedQuestion(${index})">Frage ${index + 1}</a>
                        </li>
                    `)
                    .join('');
            }

            // Zeigt eine markierte Frage an
            window.showMarkedQuestion = function (index) {
                currentQuestion = index;
                showQuestion(index);
                updateProgress();
            };

            // Erste Frage anzeigen
            showQuestion(currentQuestion);
        });
});
