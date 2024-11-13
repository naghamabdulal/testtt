// BAR

function showSidebar() {
    let sidebar = document.querySelector(".listcom");
    sidebar.style.display = "flex";
  }

  function hideside() {
    let sidebar = document.querySelector(".listcom");
    sidebar.style.display = "none";
  } 
  let logBtn = document.getElementById("login");

logBtn.addEventListener("click", function () {
  window.location.href = "log.html";
});