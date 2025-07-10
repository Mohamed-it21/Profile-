document.addEventListener("DOMContentLoaded", () => {
  // Falling stars background
  const canvas = document.getElementById("stars");
  const ctx = canvas.getContext("2d");
  let stars = [];

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });

  class Star {
    constructor() {
      this.reset();
    }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * -canvas.height;
      this.size = Math.random() * 2;
      this.speed = Math.random() * 0.8 + 0.2;
    }
    update() {
      this.y += this.speed;
      if (this.y > canvas.height) {
        this.reset();
      }
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
    }
  }

  function createStars(count) {
    for (let i = 0; i < count; i++) {
      stars.push(new Star());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star) => {
      star.update();
      star.draw();
    });
    requestAnimationFrame(animate);
  }

  createStars(120);
  animate();
});