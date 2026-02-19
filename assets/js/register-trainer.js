const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

document.getElementById("trainerForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const resultDiv = document.getElementById("result");

  if(!email || !password){
    alert("Please fill in all fields.");
    return;
  }

  try {

    const response = await fetch(`${API_URL}/register-trainer`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(!response.ok){
      resultDiv.innerHTML = `<p style="color:red;">${data.error}</p>`;
      return;
    }

    resultDiv.innerHTML = `
      <p style="color:green;">Registration successful!</p>
      <p>Your Trainer Code:</p>
      <h3>${data.trainer_code}</h3>
      <p>Share this code with your students.</p>
    `;

  } catch (err) {
    resultDiv.innerHTML = `<p style="color:red;">Server error.</p>`;
  }
});