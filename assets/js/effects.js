// Mouse Parallax
const hero = document.querySelector('.hero');
const heroCard = document.querySelector('.hero-card');

hero.addEventListener('mousemove', (e) => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  heroCard.style.transform = `translate(${x}px, ${y}px)`;
});

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.section, .card, .step, .stat')
  .forEach(el => observer.observe(el));

// Counter Animation
document.querySelectorAll('.counter').forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = target / 100;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
