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

    console.log("API Response:", data);  // Ilog ang response para makita kung may error

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    const statusElement = document.getElementById("enrollmentStatus");
    const lockedSection = document.getElementById("lockedContent");

    if (data.enrollment_status === "Approved") {
      statusElement.innerHTML =
        `<span style="color:green;font-weight:600;">Enrollment Approved ✅</span>`;

      lockedSection.style.display = "block";
    } else if (data.enrollment_status === "Rejected") {
      statusElement.innerHTML =
        `<span style="color:red;font-weight:600;">Enrollment Rejected ❌</span>`;

      lockedSection.style.display = "none";

      alert("Your enrollment has been rejected. Please contact your trainer.");
    } else {
      statusElement.innerHTML =
        `<span style="color:orange;font-weight:600;">Waiting for Approval ⏳</span>`;

      lockedSection.style.display = "none";
    }
  } catch (err) {
    console.error("Failed to load student data:", err);
  }
}

loadStudentData();

document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "login.html";
});

// Toggle functionality for My Enrollment
document.getElementById("enrollmentBtn").addEventListener("click", function () {
  var enrollmentContent = document.getElementById("enrollmentContent");
  if (enrollmentContent.style.display === "block") {
    enrollmentContent.style.display = "none";
  } else {
    enrollmentContent.style.display = "block";
  }
});
