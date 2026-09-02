// CLEMAN — Nav active state on scroll

(function () {
  'use strict';

  const nav = document.getElementById('nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const toggle = document.getElementById('nav-toggle');
  const navLinksContainer = document.getElementById('nav-links');

  // ── Scrolled border ──────────────────────────────────────────
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
    updateActiveLink();
  }, { passive: true });

  // ── Active nav link on scroll ─────────────────────────────────
  function updateActiveLink() {
    const scrollPos = window.scrollY + 80;
    const sections = ['home', 'wellness', 'beauty', 'art', 'about', 'contact'];

    let current = 'home';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollPos) current = id;
    });

    navLinks.forEach(link => {
      const href = link.getAttribute('href').replace('#', '');
      link.classList.toggle('active', href === current);
    });
  }

  // ── Mobile menu ────────────────────────────────────────────────
  if (toggle) {
    toggle.addEventListener('click', () => {
      navLinksContainer.classList.toggle('open');
    });
  }

  // Close menu on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinksContainer.classList.remove('open');
    });
  });

})();
