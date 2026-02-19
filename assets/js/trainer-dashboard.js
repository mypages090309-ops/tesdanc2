// 🔐 Protect Page
const isLoggedIn = localStorage.getItem("loggedIn");
const role = localStorage.getItem("userRole");

if(isLoggedIn !== "true" || role !== "trainer"){
  window.location.href = "login.html";
}

// Logout
document.getElementById("logoutBtn").addEventListener("click", function(){
  localStorage.clear();
  window.location.href = "login.html";
});
