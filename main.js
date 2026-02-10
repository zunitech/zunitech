/* ===============================
   MENÚ MÓVIL
=============================== */
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

/* ===============================
   NAV ACTIVO POR SCROLL
=============================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav a');

function setActiveLink() {
  let scrollY = window.scrollY + 120;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', setActiveLink);


const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdown = document.querySelector('.nav-dropdown');

if (dropdownBtn && dropdown) {

  dropdownBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation(); 

    dropdown.classList.toggle('open');
  });

  
  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('open');
      nav.classList.remove('open');
    });
  });

 
  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
}

