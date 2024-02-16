document.getElementById("menuButton").addEventListener("click", function () {
  let topMenu = document.getElementById("mobileNavItems");
  let sidebar = document.getElementById("sidebar");
  if (topMenu.classList.contains("hidden")) {
    topMenu.classList.remove("hidden");
  } else {
    topMenu.classList.add("hidden");
  }
  if (!sidebar.classList.contains("hidden")) {
    sidebar.classList.add("hidden");
  }
});
document.getElementById("sideMenuButton").addEventListener("click", function () {
  let topMenu = document.getElementById("mobileNavItems");
  let sidebar = document.getElementById("sidebar");
  if (sidebar.classList.contains("hidden")) {
    sidebar.classList.remove("hidden");
  } else {
    sidebar.classList.add("hidden");
  }
  if (!topMenu.classList.contains("hidden")) {
    topMenu.classList.add("hidden");
  }
});