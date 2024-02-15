document.getElementById("menuButton").addEventListener("click", function () {
  var menu = document.getElementById("mobileNavItems");
  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
