// Show animation when section visible
const sections = document.querySelectorAll("section");

const reveal = () => {
  sections.forEach(s => {
    const r = s.getBoundingClientRect();
    if (r.top < window.innerHeight - 80) {
      s.classList.add("show");
    }
  });
};

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);