window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".search-frame__tab_current") &&
    e.target.closest(".search-frame__tab-text")
  ) {
    let parent = e.target.closest(".search-frame__tab");
    let searchTabs = parent.closest('.search-frame').querySelectorAll(".search-frame__tab");
    let searchSections = parent.closest('.search-frame').querySelectorAll(".search-list__section");
    searchTabs.forEach((el) => {
      el.classList.remove("search-frame__tab_current");
    });
    parent.classList.add("search-frame__tab_current");

    let points = [...searchTabs];
    let elPos = points.indexOf(parent);
    searchSections.forEach((el) => {
      el.classList.remove("search-list__section_current");
    });
    console.log(elPos);
    searchSections[parseInt(elPos)].classList.add(
      "search-list__section_current"
    );
  }
});
