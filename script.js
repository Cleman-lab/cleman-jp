// CLEMAN — Simple nav toggle and active state

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const toggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  // Mobile menu toggle
  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('active');
    });
  }

  // Set active link based on current URL
  const currentPath = window.location.pathname;
  const currentPage = currentPath.split('/').pop() || 'index.html';

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

})();
