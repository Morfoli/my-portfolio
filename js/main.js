// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
    });
  }

  // Fix photo fallback display on load (for when img fails)
  const photos = document.querySelectorAll('.photo-placeholder img');
  photos.forEach(img => {
    img.addEventListener('error', () => {
      img.style.display = 'none';
      const fallback = img.nextElementSibling;
      if (fallback && fallback.classList.contains('photo-fallback')) {
        fallback.style.display = 'flex';
      }
    });
  });
});
