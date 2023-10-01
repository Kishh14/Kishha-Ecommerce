// Script for navigation bar
document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("menu-button");
  const closeButton = document.getElementById("close-button");

  const navMenu = document.getElementById("nav-menu");
  const navigation = document.getElementById("navigation");
  let headerTransitionDelay = 500; // .5s

  if (menuButton) {
    menuButton.addEventListener("click", () => {
      navMenu.style.right = "0";
      navigation.style.overflow = "visible";
    });

    closeButton.addEventListener("click", () => {
      navMenu.style.right = "-30%";
      setTimeout(() => {
        navigation.style.overflow = "hidden";
      }, headerTransitionDelay);
    });
  }
});
