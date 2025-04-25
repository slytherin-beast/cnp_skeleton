const canvas = document.getElementById("cursor-particles");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particles = [];
window.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 2; i++) {
    particles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 1.5 + 0.3,
      opacity: 0.8,
      speedX: (Math.random() - 0.5) * 1.2,
      speedY: (Math.random() - 0.5) * 1.2
    });
  }
});
function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particles.length; i++) {
    let p = particles[i];
    p.x += p.speedX;
    p.y += p.speedY;
    p.opacity -= 0.015;
    if (p.opacity <= 0) {
      particles.splice(i, 1);
      i--;
      continue;
    }
    ctx.fillStyle = `rgba(15, 59, 45, ${p.opacity})`;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  }
  requestAnimationFrame(handleParticles);
}
handleParticles();
