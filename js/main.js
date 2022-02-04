// Mostrar menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show-menu');
    });
  }
};
showMenu('nav-toggle', 'nav-menu');

//Quitar Menu mobil

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

//Scroll active section

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  section.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;

    sectionId = current.getAttribute('id');

    scrollY > scrtionTop && scrollY <= sectionTop + sectionHeight
      ? document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.add('active-link')
      : document
          .querySelector('.nav__menu a[href*=' + sectionId + ']')
          .classList.remove('active-link');
  });
}

window.addEventListener('scroll', scrollActive);

function scrollHeader() {
  const nav = document.getElementById('header');
  this.scrollY >= 200
    ? nav.classList.add('scroll-header')
    : nav.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

function scrollTop() {
  const scrollTop = document.getElementById('scroll-top');
  this.scrollY >= 560
    ? scrollTop.classList.add('scroll-top')
    : scrollTop.classList.remove('scroll-top');
}

window.addEventListener('scroll', scrollTop);

//Desplegar FAQ

document.querySelectorAll('question-arrow').forEach((e) => {
  e.addEventListener;
});
