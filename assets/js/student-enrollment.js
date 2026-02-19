const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

document.getElementById("studentForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const trainer_code = document.getElementById("trainerCode").value.trim().toUpperCase();
  const resultDiv = document.getElementById("result");

  if(!email || !password || !trainer_code){
    alert("Please fill in all fields.");
    return;
  }

  try {

    const response = await fetch(`${API_URL}/register-student`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, trainer_code })
    });

    const data = await response.json();

    if(!response.ok){
      resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
      return;
    }

    let seconds = 5;

    resultDiv.innerHTML = `
      <p style="color:green; font-weight:600;">Enrollment successful!</p>
      <p>Redirecting to login in <span id="countdown">${seconds}</span> seconds...</p>
    `;

    const countdownInterval = setInterval(() => {
      seconds--;
      const el = document.getElementById("countdown");
      if(el) el.textContent = seconds;

      if(seconds <= 0){
        clearInterval(countdownInterval);
        window.location.href = "login.html";
      }
    }, 1000);

  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Server error.</p>`;
  }
});