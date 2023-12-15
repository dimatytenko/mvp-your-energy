import { gsap } from 'gsap';

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
};

const text = document.querySelector('.footer-title-span');
const observer = new IntersectionObserver(handleIntersection, options);

observer.observe(text);

function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }

    gsap.set(text, { clearProps: 'all' });

    gsap.to(text, {
      duration: 2,
      opacity: 1,
      x: 0,
      rotationX: 360,
      delay: 0,
    });
    //observer.unobserve(entry.target);
  });
}
