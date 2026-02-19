const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

const isLoggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if(isLoggedIn !== "true" || role !== "student"){
  window.location.href = "login.html";
}

// =============================
// LOAD STUDENT DATA
// =============================
async function loadStudentData() {
  try {
    const response = await fetch(`${API_URL}/student-info?email=${email}`);
    const data = await response.json();

    if(!response.ok){
      console.error(data.error);
      return;
    }

    const statusElement = document.getElementById("enrollmentStatus");

    if (data.enrollment_status === "Approved") {
      statusElement.innerHTML = `<span style="color:green;font-weight:600;">Enrollment Approved ✅</span>`;
    }
    else if (data.enrollment_status === "Rejected") {
      statusElement.innerHTML = `<span style="color:red;font-weight:600;">Enrollment Rejected ❌</span>`;
    }
    else {
      statusElement.innerHTML = `<span style="color:orange;font-weight:600;">Waiting for Approval ⏳</span>`;
    }

  } catch (err) {
    console.error("Failed to load student data");
  }
}

loadStudentData();

// =============================
// LOGOUT
// =============================
document.getElementById("logoutBtn").addEventListener("click", function(){
  localStorage.clear();
  window.location.href = "login.html";
});
