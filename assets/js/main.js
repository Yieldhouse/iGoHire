(function () {
  var navItems = document.querySelectorAll('[data-nav-item]');
  var menuToggle = document.getElementById('menu-toggle');
  var mainNav = document.getElementById('main-nav');

  function closeAllDropdowns(except) {
    navItems.forEach(function (item) {
      if (item !== except) {
        item.classList.remove('open');
        var btn = item.querySelector('.nav-label');
        if (btn) btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  navItems.forEach(function (item) {
    var btn = item.querySelector('.nav-label');
    if (!btn) return;
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = item.classList.contains('open');
      closeAllDropdowns(item);
      item.classList.toggle('open', !isOpen);
      btn.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  document.addEventListener('click', function (e) {
    var isInsideNav = mainNav && mainNav.contains(e.target);
    if (!isInsideNav) {
      closeAllDropdowns();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeAllDropdowns();
      if (mainNav) mainNav.classList.remove('nav-open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      var isOpen = mainNav.classList.toggle('nav-open');
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      if (!isOpen) closeAllDropdowns();
    });
  }

  // Close mobile menu when a plain link (not a dropdown toggle) is clicked
  if (mainNav) {
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('nav-open');
        if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
        closeAllDropdowns();
      });
    });
  }
})();
