(function () {
  var root = document.documentElement;
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Bascule de thème, avec fondu quand le navigateur sait le faire */
  var btns = document.querySelectorAll('[data-theme-set]');
  function mark(name) {
    btns.forEach(function (b) { b.setAttribute('aria-pressed', String(b.dataset.themeSet === name)); });
  }
  function apply(name) {
    var run = function () { root.setAttribute('data-theme', name); mark(name); };
    if (document.startViewTransition && !reduce) document.startViewTransition(run); else run();
    try { localStorage.setItem('sg-theme', name); } catch (e) {}
  }
  mark(root.getAttribute('data-theme') || 'light');
  btns.forEach(function (b) { b.addEventListener('click', function () { apply(b.dataset.themeSet); }); });

  /* Zone sous le pointeur, sur toute la page */
  var spot = document.querySelector('.spot');
  if (spot && !reduce && !window.matchMedia('(pointer: coarse)').matches) {
    var raf = 0, x = 0, y = 0;
    document.addEventListener('pointermove', function (e) {
      x = e.clientX; y = e.clientY;
      if (!raf) raf = requestAnimationFrame(function () {
        raf = 0;
        spot.style.setProperty('--mx', x + 'px');
        spot.style.setProperty('--my', y + 'px');
        spot.classList.add('on');
      });
    }, { passive: true });
    document.addEventListener('pointerleave', function () { spot.classList.remove('on'); });
  }

  /* Titre d'accueil révélé mot par mot */
  var h = document.querySelector('.split');
  if (h) {
    var words = h.textContent.trim().split(/\s+/);
    h.textContent = '';
    words.forEach(function (w, i) {
      var s = document.createElement('span');
      s.className = 'w'; s.style.setProperty('--i', i); s.setAttribute('aria-hidden', 'true');
      s.textContent = w; h.appendChild(s);
      if (i < words.length - 1) h.appendChild(document.createTextNode(' '));
    });
  }

  /* Filtres (publications, projets) : tout reste visible sans JavaScript */
  document.querySelectorAll('[data-filter]').forEach(function (bar) {
    var attr = 'data-' + bar.dataset.filter;
    var chips = bar.querySelectorAll('.chip');
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        chips.forEach(function (o) { o.setAttribute('aria-pressed', String(o === c)); });
        var v = c.dataset.value;
        document.querySelectorAll('[' + attr + ']:not(.chip)').forEach(function (el) {
          if (el.closest('[data-filter]')) return;
          el.hidden = !(v === 'all' || el.getAttribute(attr) === v);
        });
        document.querySelectorAll('.year').forEach(function (y) {
          var grid = y.nextElementSibling;
          y.hidden = !!grid && !grid.querySelector('[' + attr + ']:not([hidden])');
        });
      });
    });
  });

  if (reduce || !('IntersectionObserver' in window)) return;

  /* Compteurs : décélèrent jusqu'à la valeur, sans dépassement */
  var fmt = function (n) { return n.toLocaleString('fr-FR'); };
  var counters = document.querySelectorAll('[data-count]');
  counters.forEach(function (el) { el.textContent = fmt(0); });
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      io.unobserve(e.target);
      var el = e.target, end = +el.dataset.count, t0 = performance.now(), dur = 960;
      (function tick(now) {
        var p = Math.min(1, (now - t0) / dur), k = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(Math.round(end * k));
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  counters.forEach(function (el) { io.observe(el); });
})();
