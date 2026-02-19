const API_URL = "https://tesda-auth-api.nextwavehub01.workers.dev";

document.getElementById("loginForm").addEventListener("submit", async function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!email || !password) {
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

    if (!response.ok) {
      alert(data.error || "Login failed");
      return;
    }

    // Save JWT token and role in sessionStorage
    sessionStorage.setItem("token", data.token);  // Save the JWT token
    sessionStorage.setItem("userRole", data.role);  // Save the user role (trainer or student)
    sessionStorage.setItem("userEmail", email);  // Save the email for reference

    // Redirect based on role
    if (data.role === "student") {
      window.location.href = "student-dashboard.html"; // Redirect to student dashboard
    } else {
      window.location.href = "trainer-dashboard.html"; // Redirect to trainer dashboard
    }

  } catch (err) {
    alert("Server error. Try again.");
  }
});
