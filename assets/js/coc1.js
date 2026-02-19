let currentLesson = 1;  // Start with lesson 1

// Function to start the lesson
function startLesson() {
  document.querySelector('.course-overview').innerHTML = `
    <div class="lesson-content">
      <h1>Lesson ${currentLesson}</h1>
      <p>Details for lesson ${currentLesson} here...</p>

      <button onclick="nextLesson()">Next Lesson</button>
      <button onclick="previousLesson()">Previous Lesson</button>
    </div>
  `;
}

// Function to go to next lesson
function nextLesson() {
  currentLesson++;
  updateLesson();
}

// Function to go to previous lesson
function previousLesson() {
  if (currentLesson > 1) {
    currentLesson--;
    updateLesson();
  }
}

// Function to update the lesson content dynamically
function updateLesson() {
  document.querySelector('.lesson-content h1').textContent = `Lesson ${currentLesson}`;
  document.querySelector('.lesson-content p').textContent = `Details for lesson ${currentLesson} here...`;
}
