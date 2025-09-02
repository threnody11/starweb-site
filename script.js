document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  document.getElementById('formMessage').classList.remove('hidden');
  e.target.reset();
});
