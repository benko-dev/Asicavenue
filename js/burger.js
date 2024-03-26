document.addEventListener("click", (e) => {
  if (e.target.closest(".burger-btn")) {
    e.target.closest(".burger-btn").classList.toggle("active");
    document.querySelector(".header-bottom").classList.toggle("active");

    if (e.target.closest(".burger-btn").classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      if (document.querySelector(".catalog-aside")) {
        if (
          !document.querySelector(".catalog-aside").classList.contains("active")
        ) {
          document.body.style.overflow = "visible";
        }
      } else {
        document.body.style.overflow = "visible";
      }
    }
  }
});
