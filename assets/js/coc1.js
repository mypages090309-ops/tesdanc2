// Function to load lesson details when a lesson is clicked
function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");

    fetch('https://raw.githubusercontent.com/mypages090309-ops/tesdanc2/main/assets/json/lesson1.json')
        .then(response => response.json())
        .then(data => {
            const lesson = data.lesson1;

            if (lessonId === 'lesson1') {
                lessonTitle.textContent = lesson.title;

                lessonDetails.innerHTML = `
                    <p>${lesson.overview}</p>

                    <h3>Mga Bahagi ng Computer:</h3>
                    <ul>
                        ${lesson.parts_of_computer.map(part => `
                            <li>
                                <strong>${part.name}:</strong>
                                <p>${part.definition}</p>
                                <img src="${part.image}" alt="${part.name}" class="part-image">
                            </li>
                        `).join('')}
                    </ul>

                    <h3>Step-by-Step Procedure:</h3>
                    <ol>
                        ${lesson.step_by_step_procedure.map(step => `
                            <li>
                                <p><strong>${step.step}:</strong> ${step.description}</p>
                                <img src="${step.image}" alt="${step.step}" class="step-image">
                            </li>
                        `).join('')}
                    </ol>
                `;
            }
        })
        .catch(error => console.error('Error loading lesson:', error));
}

// Function to close the window and go back to the student dashboard
function closeWindow() {
    window.location.href = "student-dashboard.html";
}
