const menuButton = document.querySelector('#menu');
const nav = document.querySelector('nav');

menuButton.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuButton.classList.toggle('open', isOpen);
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

function toggleMenu() {
  nav.classList.toggle('hidden');

  menuButton.classList.toggle('open');
}
