// Pag-handle ng navigation ng lessons
let currentLesson = 1;  // Start with Lesson 1

function navigateLesson(direction) {
    const totalLessons = 2; // Total number of lessons
    const currentLessonDiv = document.getElementById(`lesson${currentLesson}`);
    currentLessonDiv.style.display = "none";  // Hide current lesson

    currentLesson += direction;  // Move to the next or previous lesson

    if (currentLesson < 1) currentLesson = totalLessons;  // Wrap around to last lesson
    if (currentLesson > totalLessons) currentLesson = 1;  // Wrap around to first lesson

    const nextLessonDiv = document.getElementById(`lesson${currentLesson}`);
    nextLessonDiv.style.display = "block";  // Show next lesson

    // Hide or show previous/next buttons
    document.getElementById("previousLessonBtn").style.display = currentLesson === 1 ? "none" : "inline-block";
    document.getElementById("nextLessonBtn").style.display = currentLesson === totalLessons ? "none" : "inline-block";
}
