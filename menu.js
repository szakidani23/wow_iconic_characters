"use strict";
// Hide the menu on lower screen
window.addEventListener("resize", function () {
  var nav = document.getElementById("navNormal");
  var screenWidth = window.innerWidth;

  if (screenWidth <= 800) {
    nav.classList.add("hidden");
  } else {
    nav.classList.remove("hidden");
  }
});

// Trigger the resize event on page load to initially hide/show the navigation
window.dispatchEvent(new Event("resize"));

/// Mobile menu functions
window.addEventListener("resize", function () {
  var navSmall = document.getElementById("navMobile");
  var headerCont = document.getElementById("headerContainer");
  var screenWidth = window.innerWidth;

  if (screenWidth <= 800) {
    navSmall.classList.remove("hidden");
    headerCont.classList.add("flexnav");
  } else {
    navSmall.classList.add("hidden");
    headerCont.classList.remove("flexnav");
  }
});
window.dispatchEvent(new Event("resize"));

/// Open, hide  Mobile Menu
var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-400px";
}

////////// MUSIC ENABLE || MUTE  ///////////
document.getElementById("soundButton").addEventListener("click", function () {
  var themeSong = document.getElementById("themeSong");
  var soundIcon = document.getElementById("soundButton");
  themeSong.muted = !themeSong.muted;
  toggleSoundIcon(themeSong.muted, soundIcon);
});

// Function to toggle the sound icon
function toggleSoundIcon(isMuted, soundIcon) {
  if (isMuted) {
    soundIcon.classList.remove("fa-volume-high");
    soundIcon.classList.add("fa-volume-xmark");
  } else {
    soundIcon.classList.remove("fa-volume-xmark");
    soundIcon.classList.add("fa-volume-high");
  }
}
