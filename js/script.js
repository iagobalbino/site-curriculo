const btnMobile = document.getElementsByClassName('btn_mobile');

function toggleMenu() {
  const nav = document.getElementsByClassName('nav');
  nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
