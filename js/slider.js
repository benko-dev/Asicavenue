const sliderPreview = new Swiper(".prod-card__preview-slider", {
  loop: true,
  spaceBetween: 100,
  speed: 600,

  navigation: {
    nextEl: ".prod-card__button-next",
    prevEl: ".prod-card__button-prev",
  },
});

const sliderPreviewHero = new Swiper(".prod-banner__preview-slider-hero", {
  loop: true,
  spaceBetween: 100,
  speed: 600,

  navigation: {
    nextEl: ".prod-banner__button-next",
    prevEl: ".prod-banner__button-prev",
  },
  pagination: {
    el: ".prod-banner__pagination",
    clickable: true,
  },
});
