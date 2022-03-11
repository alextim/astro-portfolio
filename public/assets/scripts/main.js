'use strict';

window.addEventListener("DOMContentLoaded", function () {
  const mainMenu = document.getElementById('main-menu');

  /**
   * Hamburger Toggle
   *
   */
  const menuToggle = document.getElementById('menu-toggle');

  const menuToggleHandler = () => {
    menuToggle.toggleAttribute('aria-expanded');
    menuToggle.classList.toggle('open');
    mainMenu.classList.toggle('open');
  };

  menuToggle.addEventListener('click', menuToggleHandler, false);

  /**
   * Scroll Spy
   *
   */
  const SECTION_ITEM_CLASS = 'section-item';
  const ACTIVE_CLASS = 'active';

  const targetSelectorAll = `.${SECTION_ITEM_CLASS}`;

  const options = {
    threshold: 0.5,
  };

  const inView = (target) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const currentElement = entry.target;
        const currentNav = mainMenu.querySelector(`a[href='#${currentElement.id}']`);
        if (entry.isIntersecting) {
          currentNav.classList.add(ACTIVE_CLASS);
        } else {
          currentNav.classList.remove(ACTIVE_CLASS);
        }
      });
    }, options);

    observer.observe(target);
  };

  const targets = document.querySelectorAll(targetSelectorAll);
  targets.forEach(inView);

}, false);




