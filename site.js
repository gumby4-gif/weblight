/* site.js — shared utilities for Wu's Tai Chi Chuan Academy Detroit
   Include this in every page BEFORE the header/footer fetch calls:
   <script src="site.js"></script>
*/

/* ── safeInject ──────────────────────────────────────────────────────
   Fetches an HTML fragment, strips its <script> tags, injects the
   remaining nodes into the target element, then re-executes the
   scripts so header/footer behaviour (nav, footer year, etc.) runs.
──────────────────────────────────────────────────────────────────── */
function safeInject(id, html) {
  var target = document.getElementById(id);
  if (!target) return;
  var doc = new DOMParser().parseFromString(html, 'text/html');
  var scripts = Array.from(doc.body.querySelectorAll('script'));
  scripts.forEach(function(s) { s.parentNode.removeChild(s); });
  while (target.firstChild) target.removeChild(target.firstChild);
  Array.from(doc.body.childNodes).forEach(function(node) {
    target.appendChild(document.importNode(node, true));
  });
  scripts.forEach(function(orig) {
    var s = document.createElement('script');
    s.textContent = orig.textContent;
    document.head.appendChild(s);
  });
}

/* ── loadFragment ────────────────────────────────────────────────────
   Convenience wrapper: fetch a file and inject it into a target id.
   Usage: loadFragment('header.html', 'site-header');
──────────────────────────────────────────────────────────────────── */
function loadFragment(file, targetId) {
  fetch(file)
    .then(function(r) { return r.text(); })
    .then(function(html) { safeInject(targetId, html); });
}

/* ── Scroll fade-in ──────────────────────────────────────────────────
   Any element with class="fade-in" starts invisible and fades up
   into view as the user scrolls to it. Add class="fade-in delay-1",
   "delay-2", or "delay-3" for staggered siblings.
   CSS required in styles.css:

   .fade-in { opacity: 0; transform: translateY(24px);
              transition: opacity 0.6s ease, transform 0.6s ease; }
   .fade-in.visible { opacity: 1; transform: translateY(0); }
   .fade-in.delay-1 { transition-delay: 0.1s; }
   .fade-in.delay-2 { transition-delay: 0.2s; }
   .fade-in.delay-3 { transition-delay: 0.35s; }
──────────────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(function(el) {
      el.classList.add('visible');
    });
    return;
  }
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(function(el) {
    observer.observe(el);
  });
});
