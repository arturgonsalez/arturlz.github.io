
  // ── Scroll progress ────────────────────────────────────────────────
  const progressEl = document.getElementById('scroll-progress');
  function updateProgress() {
    const scrolled = window.scrollY;
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const pct = Math.round((scrolled / total) * 100);
    progressEl.textContent = String(pct).padStart(2, '0') + '%';
  }

  // ── Section observer (fade-in + nav highlight) ──────────────────────
  const sections = document.querySelectorAll('.cs-section');
  const navBtns = document.querySelectorAll('.cs-nav__sec');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const id = entry.target.id;
        if (id) {
          navBtns.forEach(btn => {
            btn.classList.toggle('cs-nav__sec--active', btn.dataset.target === id);
          });
        }
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -10% 0px' });

  sections.forEach(s => observer.observe(s));

  // Also observe hero
  const hero = document.querySelector('.cs-hero');
  if (hero) observer.observe(hero);

  // ── Nav scroll buttons ──────────────────────────────────────────────
  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // ── Before/After tabs ───────────────────────────────────────────────
  document.querySelectorAll('.cs-ba-tabs').forEach(tabsEl => {
    tabsEl.querySelectorAll('.cs-ba-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        const container = tabsEl.closest('.cs-before-after');
        container.querySelectorAll('.cs-ba-tab').forEach(t => t.classList.remove('cs-ba-tab--active'));
        container.querySelectorAll('.cs-ba-panel').forEach(p => p.classList.remove('cs-ba-panel--active'));
        tab.classList.add('cs-ba-tab--active');
        const panel = container.querySelector('#' + tab.dataset.panel);
        if (panel) panel.classList.add('cs-ba-panel--active');
      });
    });
  });

  // ── Scroll listener ─────────────────────────────────────────────────
  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
