// Trigger fade-up animations when DOM loads
document.addEventListener("DOMContentLoaded", () => {
  const fadeElements = document.querySelectorAll(".fade-up");
  fadeElements.forEach((el) => {
    el.style.animationPlayState = "running";
  });
});