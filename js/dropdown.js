document.addEventListener("click", (e) => {
  if (e.target.closest(".dropdown__header")) {
    if (!e.target.closest(".dropdown").classList.contains("active")) {
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.remove("active");
      });
      e.target.closest(".dropdown").classList.add("active");
    } else {
      e.target.closest(".dropdown").classList.remove("active");
    }
  }
  if (e.target.closest(".dropdown__item")) {
    let parent = e.target.closest(".dropdown");
    let newItem = e.target.closest(".dropdown__item").innerHTML;
    let current = parent.querySelector(".dropdown__current");

    current.innerHTML = newItem;

    if (e.target.closest(".input-spoiler")) {
      let label = e.target
        .closest(".dropdown__item")
        .getAttribute("data-label");

      e.target
        .closest(".input-spoiler")
        .querySelector(".input-spoiler__input").value = label;
    }

    e.target.closest(".dropdown").classList.remove("active");
  }

  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("active");
    });
  }

  if (e.target.closest(".input-spoiler") && !e.target.closest('.dropdown')) {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("active");
    });
    e.target
      .closest(".input-spoiler")
      .querySelector(".dropdown")
      .classList.add("active");
  }
});
