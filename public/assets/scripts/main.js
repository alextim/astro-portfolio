'use strict';

window.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById('menu-toggle');
  const mainMenu = document.getElementById('main-menu');

  const menuToggleHandler = () => {
    menuToggle.toggleAttribute('aria-expanded');
    menuToggle.classList.toggle('open');
    mainMenu.classList.toggle('open');
  };


  menuToggle.addEventListener('click', menuToggleHandler, false);

}, false);



