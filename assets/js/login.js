document.getElementById("loginForm").addEventListener("submit", function(e){
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const role = document.querySelector("input[name='role']:checked").value;

  if(!email || !password){
    alert("Please fill in all fields.");
    return;
  }

  // 🔐 Save fake session
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("userRole", role);
  localStorage.setItem("userEmail", email);

  // Redirect based on role
  if(role === "student"){
    window.location.href = "student-dashboard.html";
  } else {
    window.location.href = "trainer-dashboard.html";
  }
});
