// Smooth-scroll anchor links (fallback for browsers without CSS scroll-behavior)
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
  anchor.addEventListener('click', function(e) {
    var target = document.querySelector(this.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Active nav link highlight based on scroll position
(function() {
  var sections = ['work', 'about', 'services', 'contact'];
  var links = {};
  sections.forEach(function(id) {
    links[id] = document.querySelector('.nav__link[href="#' + id + '"]');
  });

  function onScroll() {
    var scrollY = window.scrollY + 120;
    var active = null;
    sections.forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) active = id;
    });
    sections.forEach(function(id) {
      if (!links[id]) return;
      links[id].classList.toggle('nav__link--active', id === active);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();
