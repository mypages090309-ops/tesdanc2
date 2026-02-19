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
          <td colspan="4" style="padding:12px;">No students enrolled yet.</td>
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
          <td style="padding:12px;">
            <button onclick="updateStatus('${student.email}','Approved')" style="margin-right:6px; padding:6px 10px; cursor:pointer;">
              Approve
            </button>
            <button onclick="updateStatus('${student.email}','Rejected')" style="padding:6px 10px; cursor:pointer;">
              Reject
            </button>
          </td>
        </tr>
      `;
      tbody.innerHTML += row;
    });

  } catch (err) {
    console.error("Failed to load student list");
  }
}

// =============================
// UPDATE STUDENT STATUS
// =============================
async function updateStatus(studentEmail, status) {
  try {
    const response = await fetch(`${API_URL}/update-student-status`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        student_email: studentEmail,
        status: status
      })
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.error);
      return;
    }

    // reload list after update
    loadStudents();

  } catch (err) {
    console.error("Failed to update status");
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
  window.location.href = "index.html";
});
