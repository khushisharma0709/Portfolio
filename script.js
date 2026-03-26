// Year
document.getElementById("year").textContent = new Date().getFullYear();

// Typing effect
const typing = document.querySelector(".typing");
const phrases = ["I build fast, accessible web apps.", "I love solving DSA problems.", "Exploring AI-assisted UX."];
let idx = 0, char = 0, deleting = false;
function type() {
  typing.textContent = phrases[idx].slice(0, char);
  if (!deleting && char < phrases[idx].length) char++;
  else if (deleting && char > 0) char--;
  else { deleting = !deleting; if (!deleting) idx = (idx+1)%phrases.length; }
  setTimeout(type, deleting ? 60 : 120);
}
type();

// Theme toggle
const root = document.documentElement;
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("bg-light");
  document.body.classList.toggle("text-dark");
});

// Canvas particles
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
function resize(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
window.addEventListener("resize", resize); resize();
for (let i=0;i<80;i++) particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,dx:(Math.random()-0.5)*0.8,dy:(Math.random()-0.5)*0.8,r:Math.random()*2+1});
function draw(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="rgba(124,92,255,0.7)";
  particles.forEach(p=>{ ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2); ctx.fill(); p.x+=p.dx;p.y+=p.dy; if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1; });
  requestAnimationFrame(draw);
}
draw();

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.2 });
document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
