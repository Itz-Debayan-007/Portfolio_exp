const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const observerOptions = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const element = entry.target;
      element.classList.add('visible');
      
      if (element.classList.contains('skill-item')) {
        const progress = element.querySelector('.skill-progress');
        const percent = progress.getAttribute('data-percent');
        progress.style.setProperty('--percent', ${percent}%);
      }
    }
  });
}, observerOptions);

document.querySelectorAll('.skill-item, .service-card, .project-card').forEach(el => {
  observer.observe(el);
});

const formObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

const form = document.querySelector('.contact-form');
formObserver.observe(form);

document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! This is a demo form.');
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.offsetTop - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  const scrollPos = window.scrollY + 150;
  
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === id) {
          link.classList.add('active');
        }
      });
    }
  });
});