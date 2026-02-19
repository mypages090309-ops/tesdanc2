// Function to load lesson details when a lesson is clicked
function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");

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

                    <h3>Take the Quiz:</h3>
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
            }
        })
        .catch(error => console.error('Error loading lesson:', error));
}

// Close the lesson view and go back to the main dashboard
function closeWindow() {
    window.location.href = "student-dashboard.html"; // Redirect back to the student dashboard
}
