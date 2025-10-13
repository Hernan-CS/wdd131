const tips = document.querySelectorAll('.fade-in');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  tips.forEach(tip => observer.observe(tip));

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("nav");

  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
    });

  document.getElementById("year").textContent = new Date().getFullYear();
}); 