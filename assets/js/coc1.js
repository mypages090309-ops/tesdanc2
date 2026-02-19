document.getElementById("nextLessonBtn").addEventListener("click", function() {
  // Load Lesson 2 content or navigate to next section
  document.getElementById("lesson1").style.display = "none";
  document.getElementById("lesson2").style.display = "block";
});

document.getElementById("nextLessonBtn2").addEventListener("click", function() {
  // Load next lesson or navigate further
  // Add logic as needed
  alert("You have completed Lesson 2. Proceeding to the next lesson.");
});