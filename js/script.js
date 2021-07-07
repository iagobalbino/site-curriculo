let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  document.body.style.overflow = show ? 'hidden' : 'initial';

  menuSection.classList.toggle('on', show);
  show = !show;
});

menu.addEventListener('click', () => {
  document.body.style.overflow = 'initial';

  menuSection.classList.remove('on');
});