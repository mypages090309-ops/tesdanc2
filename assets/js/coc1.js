// Function to load lesson details when a lesson is clicked
function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");

    // Set the URL based on the lesson selected
    const lessonUrl = lessonId === 'lesson1'
        ? 'https://tesda-auth-api.nextwavehub01.workers.dev/lesson1.json'  // Existing worker for lesson1
        : 'https://coc1lessonworker.nextwavehub01.workers.dev/lesson2.json';  // New worker URL for lesson2

    fetch(lessonUrl)
        .then(response => response.json())
        .then(data => {
            const lesson = data[lessonId];  // Dynamically load lesson based on lessonId

            if (lesson) {
                lessonTitle.textContent = lesson.lesson_title; // Access lesson_title in lesson2.json
                lessonDetails.innerHTML = `
                    <p>${lesson.lesson_description}</p>
                    <h3>Objectives:</h3>
                    <ul>
                        ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                    <h3>Materials Needed:</h3>
                    <ul>
                        ${lesson.materials_needed.map(mat => `<li>${mat}</li>`).join('')}
                    </ul>
                    <h3>Step-by-Step Procedure:</h3>
                    <ol>
                        ${lesson.step_by_step_procedure.map(step => `
                            <li>
                                <strong>${step.step_title}:</strong> ${step.step_description}
                            </li>`).join('')}
                    </ol>
                    <h3>Conclusion:</h3>
                    <p>${lesson.conclusion}</p>
                `;
            } else {
                lessonTitle.textContent = "Lesson not found";
                lessonDetails.innerHTML = "<p>Sorry, this lesson is not available.</p>";
            }
        })
        .catch(error => {
            lessonTitle.textContent = "Error Loading Lesson";
            lessonDetails.innerHTML = "<p>Sorry, there was an error loading this lesson.</p>";
            console.error('Error loading lesson:', error);
        });
}

// Function to open image in full size (modal)
function openModal(imageSrc) {
    const modal = document.createElement("div");
    modal.classList.add("image-modal");
    modal.innerHTML = `
        <span class="close-modal">&times;</span>
        <img class="modal-content" src="${imageSrc}">
    `;
    document.body.appendChild(modal);

    // Close modal when clicking on close button
    modal.querySelector(".close-modal").addEventListener("click", () => {
        document.body.removeChild(modal);
    });
}

// Function to close the window and go back to the student dashboard
function closeWindow() {
    window.location.href = "student-dashboard.html";
}

// Function to handle fetching data for both lesson1 and lesson2 from their respective workers
function loadLesson(lessonId) {
    const lessonUrl = lessonId === 'lesson1'
        ? 'https://tesda-auth-api.nextwavehub01.workers.dev/lesson1.json' // Existing worker for lesson1
        : 'https://coc1lessonworker.nextwavehub01.workers.dev/lesson2.json'; // New worker URL for lesson2

    fetch(lessonUrl)
        .then(response => response.json())
        .then(data => {
            const lesson = data[lessonId]; // Dynamically load lesson based on lessonId
            if (lesson) {
                document.getElementById("lesson-title").innerText = lesson.lesson_title;
                document.getElementById("lesson-details").innerHTML = `
                    <p>${lesson.lesson_description}</p>
                    <h3>Objectives:</h3>
                    <ul>
                        ${lesson.objectives.map(obj => `<li>${obj}</li>`).join('')}
                    </ul>
                    <h3>Materials Needed:</h3>
                    <ul>
                        ${lesson.materials_needed.map(mat => `<li>${mat}</li>`).join('')}
                    </ul>
                    <h3>Step-by-Step Procedure:</h3>
                    <ol>
                        ${lesson.step_by_step_procedure.map(step => `
                            <li>
                                <strong>${step.step_title}:</strong> ${step.step_description}
                            </li>`).join('')}
                    </ol>
                    <h3>Conclusion:</h3>
                    <p>${lesson.conclusion}</p>
                `;
            } else {
                document.getElementById("lesson-title").innerText = "Lesson not found";
                document.getElementById("lesson-details").innerHTML = "<p>Sorry, this lesson is not available.</p>";
            }
        })
        .catch(error => {
            document.getElementById("lesson-title").innerText = "Error Loading Lesson";
            document.getElementById("lesson-details").innerHTML = "<p>Sorry, there was an error loading this lesson.</p>";
            console.error("Error loading lesson:", error);
        });
}
