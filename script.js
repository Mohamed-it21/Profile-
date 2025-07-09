// --------------------
// Fade-up on scroll
// --------------------
const fadeUps = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeUps.forEach(el => {
  el.style.animationPlayState = 'paused'; // start paused
  observer.observe(el);
});

// --------------------
// Back to Top button
// --------------------
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// --------------------
// Falling stars
// --------------------
function createStar() {
  const star = document.createElement('div');
  star.classList.add('star');
  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `-${size * 2}px`;
  star.style.opacity = Math.random();
  star.style.animationDuration = `${Math.random() * 5 + 5}s`;
  document.getElementById('stars').appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 10000);
}

// Create stars continuously
setInterval(createStar, 200);