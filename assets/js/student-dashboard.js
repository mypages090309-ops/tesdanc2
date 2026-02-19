const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

const isLoggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if (isLoggedIn !== "true" || role !== "student") {
  window.location.href = "login.html";
}

async function loadStudentData() {
  try {
    const response = await fetch(`${API_URL}/student-info?email=${email}`);
    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    const statusElement = document.getElementById("enrollmentStatus");
    const enrollmentList = document.getElementById("enrollmentList");

    if (data.enrollment_status === "Approved") {
      statusElement.innerHTML = `<span style="color:green;font-weight:600;">Enrollment Approved ✅</span>`;
      enrollmentList.style.display = "block"; // Show COC links
    } else if (data.enrollment_status === "Rejected") {
      statusElement.innerHTML = `<span style="color:red;font-weight:600;">Enrollment Rejected ❌</span>`;
      enrollmentList.style.display = "none"; // Hide COC links
    } else {
      statusElement.innerHTML = `<span style="color:orange;font-weight:600;">Waiting for Approval ⏳</span>`;
      enrollmentList.style.display = "none"; // Hide COC links
    }
  } catch (err) {
    console.error("Failed to load student data");
  }
}

loadStudentData();

// Toggle COC links when "My Enrollment" is clicked
document.getElementById("myEnrollment").addEventListener("click", function() {
  const enrollmentList = document.getElementById("enrollmentList");
  const isListVisible = enrollmentList.style.display === "block";

  // Toggle visibility of the COCs
  enrollmentList.style.display = isListVisible ? "none" : "block";

  // Toggle active class on My Enrollment
  this.classList.toggle("active");
});

document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.clear();
  window.location.href = "login.html";
});
