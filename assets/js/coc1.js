// Function to load lesson details when a lesson is clicked
function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");
    const quizButton = document.getElementById("take-quiz-btn");

    // Fetch lesson data from JSON
    fetch('https://raw.githubusercontent.com/mypages090309-ops/tesdanc2/main/assets/json/lesson1.json')
        .then(response => response.json())
        .then(data => {
            const lesson = data.lesson1;

            // If lessonId matches 'lesson1', load lesson data
            if (lessonId === 'lesson1') {
                lessonTitle.textContent = lesson.title;
                lessonDetails.innerHTML = `
                    <p>${lesson.overview}</p>
                    <h3>Mga Bahagi ng Computer:</h3>
                    <ul>
                        ${lesson.parts_of_computer.map(part => `
                            <li><strong>${part.name}:</strong> ${part.definition}</li>
                        `).join('')}
                    </ul>
                    
                    <h3>Step-by-Step Procedure:</h3>
                    <ol>
                        ${lesson.step_by_step_procedure.map(step => `
                            <li>
                                <p><strong>${step.step}:</strong> ${step.description}</p>
                                <img src="${step.image}" alt="${step.step}" />
                            </li>
                        `).join('')}
                    </ol>
                `;

                // Show the "Take a Quiz" button when lesson is loaded
                quizButton.style.display = 'inline-block'; // Show quiz button
            }
        })
        .catch(error => console.error('Error loading lesson:', error));
}

// Show the Quiz Modal when the "Take a Quiz" button is clicked
function showQuiz() {
    const quizModal = document.getElementById("quiz-modal");
    
    // Fetch the lesson data again to load quiz content
    fetch('https://raw.githubusercontent.com/mypages090309-ops/tesdanc2/main/assets/json/lesson1.json')
        .then(response => response.json())
        .then(data => {
            const lesson = data.lesson1;

            // Dynamically populate the quiz modal
            quizModal.innerHTML = `
                <h2>Take the Quiz</h2>
                <form id="quiz-form">
                    ${lesson.quiz.map((question, index) => `
                        <div>
                            <label>${question.question}</label><br>
                            ${question.options.map((option, i) => `
                                <input type="radio" name="q${index}" value="${option}" id="q${index}_${i}">
                                <label for="q${index}_${i}">${option}</label><br>
                            `).join('')}
                        </div>
                    `).join('')}
                    <button type="submit">Submit Quiz</button>
                </form>
            `;
        })
        .catch(error => console.error('Error loading quiz:', error));

    // Show quiz modal
    quizModal.style.display = 'block';
}

// Hide quiz modal
function hideQuiz() {
    document.getElementById("quiz-modal").style.display = 'none';
}

// Handle quiz submission and show score feedback
document.getElementById('quiz-form')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let score = 0;
    const quizData = JSON.parse(localStorage.getItem('lessonData')).quiz;
    
    quizData.forEach((question, index) => {
        const selectedAnswer = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedAnswer && selectedAnswer.value === question.answer) {
            score++;
        }
    });

    // Display score and feedback message
    const feedbackMessage = score >= 8 ? 
        `Congratulations! You passed the quiz with ${score}/10.` :
        `Sorry, you scored ${score}/10. Please review the lesson and try again.`;

    // Show the feedback message before closing the quiz modal
    alert(feedbackMessage);

    // Disable or enable Next Topic based on score
    document.getElementById('next-topic').disabled = score < 8;  // Enable Next Topic if score >= 8

    // Close the quiz modal after feedback
    hideQuiz();  // Close modal after showing feedback
});
