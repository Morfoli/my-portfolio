// Page transitions and navigation
document.addEventListener('DOMContentLoaded', () => {
  // Fade in on page load
  document.body.classList.add('page-enter');

  // Intercept internal links for smooth page transition (fade out before navigate)
  document.querySelectorAll('a[href]').forEach(link => {
    const href = link.getAttribute('href');
    const isInternal = href && (href.endsWith('.html') || href === '' || href === 'index.html') && 
      !link.hasAttribute('download') && !href.startsWith('http') && !href.startsWith('//') && !href.startsWith('mailto:');
    if (isInternal) {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector('.nav-links')?.classList.remove('open'); // Close mobile nav
        document.body.classList.remove('page-enter');
        document.body.classList.add('page-exit');
        setTimeout(() => {
          window.location.href = href || 'index.html';
        }, 280);
      });
    }
  });

  // Mobile navigation toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
  }

  // Fix photo fallback display on load (for when img fails)
  document.querySelectorAll('.photo-placeholder img').forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback && fallback.classList.contains('photo-fallback')) {
        fallback.style.display = 'flex';
      }
    });
  });
});
