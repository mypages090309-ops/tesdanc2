const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

const isLoggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("userRole");
const email = localStorage.getItem("userEmail");

if(isLoggedIn !== "true" || role !== "trainer"){
  window.location.href = "login.html";
}

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

loadTrainerData();

document.getElementById("logoutBtn").addEventListener("click", function(){
  localStorage.clear();
  window.location.href = "login.html";
});
