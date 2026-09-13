const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menu) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    nav.style.display = nav.classList.contains('open') ? 'flex' : '';
  });
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
