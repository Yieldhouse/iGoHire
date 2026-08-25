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

  // Contact form — no backend, so submitting builds a pre-filled
  // mailto: link (to info@igohire.com) and opens the visitor's
  // default mail client instead of posting anywhere.
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = contactForm.elements['name'].value.trim();
      var email = contactForm.elements['email'].value.trim();
      var subjectField = contactForm.elements['subject'].value.trim();
      var message = contactForm.elements['message'].value.trim();

      var subject = subjectField || ('Website inquiry from ' + name);
      var body =
        'Name: ' + name + '\n' +
        'Email: ' + email + '\n\n' +
        message;

      var mailtoLink =
        'mailto:info@igohire.com' +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(body);

      window.location.href = mailtoLink;
    });
  }
});
