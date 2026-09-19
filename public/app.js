const mobileMenu = document.getElementById('side');
const menuOpenButton = document.getElementById('menu');
const menuCloseButton = document.getElementById('menuClose');

menuOpenButton.addEventListener('click', () => {
  mobileMenu.classList.add('open');
});

menuCloseButton.addEventListener('click', () => {
  mobileMenu.classList.remove('open');
});
