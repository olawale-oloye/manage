$(".testimonial-carousel").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  margin: 50,
  dots: true,
  arrows: false,
  nav: false,
  // navText: [
  //   "<i class='fa fa-chevron-left'></i>",
  //   "<i class='fa fa-chevron-right'></i>",
  // ],
  responsive: {
    0: {
      items: 1,
      nav: true,
      loop: true,
      dots: true,
    },
    600: {
      items: 2,
      nav: true,
      loop: true,
      dots: true,
    },
    900: {
      items: 3,
      nav: true,
      loop: true,
      dots: true,
    },
    // 1200: {
    //   items: 4,
    //   nav: true,
    //   loop: true,
    // },
  },
});
