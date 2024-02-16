document.getElementById("menuButton").addEventListener("click", function () {
  let menu = document.getElementById("mobileNavItems");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
document.getElementById("sideMenuButton").addEventListener("click", function () {
  let menu = document.getElementById("sidebar");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});