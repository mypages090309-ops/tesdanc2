const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

document.getElementById("loginForm").addEventListener("submit", async function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if(!email || !password){
    alert("Please fill in all fields.");
    return;
  }

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if(!response.ok){
      alert(data.error || "Login failed");
      return;
    }

    // Save session locally
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("userRole", data.role);
    localStorage.setItem("userEmail", email);

    // Redirect based on role
    if(data.role === "student"){
      window.location.href = "student-dashboard.html";
    } else {
      window.location.href = "trainer-dashboard.html";
    }

  } catch (err) {
    alert("Server error. Try again.");
  }
});
