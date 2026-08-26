document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });
  }

  // On mobile, tapping a "has-children" link toggles its dropdown
  // instead of navigating away immediately.
  document.querySelectorAll('.has-children > .nav-link').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 900) {
        var parent = link.parentElement;
        var alreadyOpen = parent.classList.contains('open');
        if (!alreadyOpen) {
          e.preventDefault();
          parent.classList.add('open');
        }
      }
    });
  });
});
