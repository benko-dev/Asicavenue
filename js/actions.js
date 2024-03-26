const overlay = document.querySelector(".overlay");
const spoilers = document.querySelectorAll(".spoiler");

document.querySelectorAll(".main-search").forEach((search) => {
  search.addEventListener("input", () => {
    document.querySelectorAll(".main-search").forEach((input) => {
      input.value = search.value;
    });

    if (search.value != "") {
      document.querySelectorAll(".search-frame").forEach((frame) => {
        frame.classList.add("active");
      });
      header.classList.remove("hidden");

      if (window.innerWidth > 767.98) {
        document.body.style.overflow = "hidden";
        overlay.classList.add("active");
      } else {
        overlay.classList.remove("active");
      }
    } else {
      document.querySelectorAll(".search-frame").forEach((frame) => {
        frame.classList.remove("active");
      });

      if (window.innerWidth > 767.98) {
        document.body.style.overflow = "visible";
      }

      overlay.classList.remove("active");
    }
  });
});

document.addEventListener("click", (e) => {
  if (e.target.closest(".spoiler__header")) {
    e.target.closest(".spoiler").classList.toggle("active");

    let el = e.target.closest(".spoiler");
    let body = el.querySelector(".spoiler__body");

    if (el.classList.contains("active")) {
      body.style.height = `${el.getAttribute("data-height")}px`;
    } else {
      body.style.height = `0px`;
    }
  }

  if (e.target.closest(".open-filters")) {
    document.querySelector(".catalog-aside").classList.add("active");
    header.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }
  if (e.target.closest(".close-filters")) {
    document.querySelector(".catalog-aside").classList.remove("active");
    if (
      !document.querySelector(".burger-btn").classList.contains("active")
    ) {
      document.body.style.overflow = "visible";
    }
  }
});

window.addEventListener("load", () => {
  if (spoilers.length > 0) {
    spoilers.forEach((el) => {
      let body = el.querySelector(".spoiler__body");
      el.setAttribute("data-height", parseInt(body.offsetHeight));

      if (el.classList.contains("active")) {
        body.style.height = `${el.getAttribute("data-height")}px`;
      } else {
        body.style.height = `0px`;
      }
    });
  }
});
window.addEventListener("resize", () => {
  if (spoilers.length > 0) {
    spoilers.forEach((el) => {
      let body = el.querySelector(".spoiler__body");
      body.style.height = "auto";

      el.setAttribute("data-height", parseInt(body.offsetHeight));

      if (el.classList.contains("active")) {
        body.style.height = `${el.getAttribute("data-height")}px`;
      } else {
        body.style.height = `0px`;
      }
    });
  }
});
