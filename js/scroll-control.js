const header = document.querySelector('.header')
let prevScrollPos = window.scrollY;

window.addEventListener("scroll", () => {
  let scrollPos = window.scrollY;

  if (scrollPos > prevScrollPos && scrollPos > 80) {
    header.classList.add("hidden");
  } else if (scrollPos < prevScrollPos) {
    header.classList.remove("hidden");
  }

  prevScrollPos = scrollPos;
});
