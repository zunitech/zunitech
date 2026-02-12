/* ======================================
   INIT CUANDO EL DOM ESTÁ LISTO
====================================== */
document.addEventListener('DOMContentLoaded', () => {

  initMobileMenu();
  initScrollActive();
  initDropdown();
  initWhatsAppPro();
  initTopNotice();


});


/* ======================================
   MENÚ MÓVIL
====================================== */
function initMobileMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!toggle || !nav) return;

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}


/* ======================================
   NAV ACTIVO POR SCROLL
====================================== */
function initScrollActive() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav a');

  if (!sections.length) return;

  function setActiveLink() {
    const scrollY = window.scrollY + 120;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.id;

      if (scrollY >= top && scrollY < top + height) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${id}`
          );
        });
      }
    });
  }

  window.addEventListener('scroll', setActiveLink);
}


/* ======================================
   DROPDOWN SERVICIOS (MÓVIL)
====================================== */
function initDropdown() {
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdown = document.querySelector('.nav-dropdown');
  const nav = document.querySelector('.nav');

  if (!dropdownBtn || !dropdown) return;

  dropdownBtn.addEventListener('click', e => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  dropdown.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('open');
      nav?.classList.remove('open');
    });
  });

  document.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
}


/* ======================================
   WHATSAPP
====================================== */
function initWhatsAppPro() {
  const waBtn = document.querySelector('.whatsapp-float');
  const tooltip = document.querySelector('.wa-tooltip');

  if (!waBtn) return;

  const observer = new IntersectionObserver(entries => {
    if (!entries[0].isIntersecting) return;

    const pulseInterval = setInterval(() => {
      waBtn.classList.add('pulse');
      setTimeout(() => waBtn.classList.remove('pulse'), 600);
    }, 8000);

    observer.disconnect(); // solo iniciar 1 vez
  });

  observer.observe(waBtn);

  /* tooltip 1 vez */
  if (tooltip) {
    setTimeout(() => {
      tooltip.classList.add('show');
      setTimeout(() => tooltip.classList.remove('show'), 4000);
    }, 2500);
  }
}

/* ======================================
   AVISO VACACIONES (SIEMPRE VISIBLE)
====================================== */
function initTopNotice() {
  const notice = document.getElementById('topNotice');
  const closeBtn = document.getElementById('closeNotice');

  if (!notice || !closeBtn) return;

  closeBtn.addEventListener('click', () => {
    notice.style.display = 'none';
  });
}
