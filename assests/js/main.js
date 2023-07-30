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

const openNav = document.querySelector(".ri-menu-2-fill");
const closeNav = document.querySelector(".ri-close-line");
const navList = document.querySelector(".navLinks ul");

openNav.addEventListener("click", function () {
  navList.style.top = "15%";
  openNav.style.display = "none";
  closeNav.style.display = "block";
});

function closeNavToggler() {
  navList.style.top = "-50%";
  openNav.style.display = "block";
  closeNav.style.display = "none";
}

closeNav.addEventListener("click", function () {
  closeNavToggler();
});

document.querySelectorAll("navLinks ul a").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    closeNavToggler();
  });
});
