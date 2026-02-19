const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

const isLoggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if(isLoggedIn !== "true" || role !== "trainer"){
  window.location.href = "login.html";
}

// =============================
// LOAD TRAINER SUMMARY DATA
// =============================
async function loadTrainerData() {
  try {
    const response = await fetch(`${API_URL}/trainer-info?email=${email}`);
    const data = await response.json();

    if(!response.ok){
      console.error(data.error);
      return;
    }

    document.getElementById("trainerCode").textContent = data.trainer_code;
    document.getElementById("totalStudents").textContent = `${data.total_students} / ${data.max_students}`;
    document.getElementById("remainingSlots").textContent = data.remaining_slots;

  } catch (err) {
    console.error("Failed to load trainer data");
  }
}

// =============================
// LOAD TRAINER STUDENT LIST
// =============================
async function loadStudents() {
  try {
    const response = await fetch(`${API_URL}/trainer-students?email=${email}`);
    const data = await response.json();

    const tbody = document.querySelector("#studentTable tbody");
    tbody.innerHTML = "";

    if (!response.ok || !data.students || data.students.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="3" style="padding:12px;">No students enrolled yet.</td>
        </tr>
      `;
      return;
    }

    data.students.forEach(student => {
      const row = `
        <tr>
          <td style="padding:12px;">${student.email}</td>
          <td style="padding:12px;">${student.enrollment_status}</td>
          <td style="padding:12px;">
            ${new Date(student.created_at).toLocaleDateString()}
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });

  } catch (err) {
    console.error("Failed to load student list");
  }
}

// Load everything
loadTrainerData();
loadStudents();

// =============================
// LOGOUT
// =============================
document.getElementById("logoutBtn").addEventListener("click", function(){
  localStorage.clear();
  window.location.href = "login.html";
});
