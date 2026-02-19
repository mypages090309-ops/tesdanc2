// Function to load lesson details when a lesson is clicked
function loadLesson(lessonId) {
    const lessonTitle = document.getElementById("lesson-title");
    const lessonDetails = document.getElementById("lesson-details");

    // Set the URL based on the lesson selected
    const lessonUrl = lessonId === 'lesson1'
        ? 'https://raw.githubusercontent.com/mypages090309-ops/tesdanc2/main/assets/json/lesson1.json'
        : ''; // Removed lesson2 URL

    if (lessonUrl === '') {
        lessonTitle.textContent = "Lesson not available";
        lessonDetails.innerHTML = "<p>This lesson is currently unavailable.</p>";
        return;
    }

    fetch(lessonUrl)
        .then(response => response.json())
        .then(data => {
            const lesson = data[lessonId];  // Dynamically load lesson based on lessonId

            if (lesson) {
                lessonTitle.textContent = lesson.title;

                lessonDetails.innerHTML = `
                    <p>${lesson.overview}</p>

                    <h3>Mga Bahagi ng Computer:</h3>
                    <ul>
                        ${lesson.parts_of_computer.map(part => `
                            <li>
                                <strong>${part.name}:</strong>
                                <p>${part.definition}</p>
                                <img src="${part.image}" alt="${part.name}" class="part-image" onclick="openModal('${part.image}')">
                            </li>
                        `).join('')}
                    </ul>

                    <h3>Step-by-Step Procedure:</h3>
                    <ol>
                        ${lesson.step_by_step_procedure.map(step => `
                            <li>
                                <p><strong>${step.step_title}:</strong> ${step.step_description}</p>
                                <img src="${step.image}" alt="${step.step}" class="step-image" onclick="openModal('${step.image}')">
                            </li>
                        `).join('')}
                    </ol>
                `;
            } else {
                lessonTitle.textContent = "Lesson not found";
                lessonDetails.innerHTML = "<p>Sorry, this lesson is not available.</p>";
            }
        })
        .catch(error => console.error('Error loading lesson:', error));
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
