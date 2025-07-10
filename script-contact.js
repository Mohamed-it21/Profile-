// Animate on load
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fade-up").style.animationPlayState = "running";
});

// Optional form submission alert
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Your message has been sent!");
  e.target.reset();
});