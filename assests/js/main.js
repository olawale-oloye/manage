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
const navList = document.querySelector("nav ul");

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

document.querySelectorAll("nav ul a").forEach((navLink) => {
  navLink.addEventListener("click", function () {
    closeNavToggler();
  });
});

const form = document.querySelector("form");
const errorTxt = document.querySelector(".error-Txt");
const formEmail = document.querySelector("formEmail");
const emailRegEx =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function alertInfo(alertTxt) {
  errorTxt.textContent = alertTxt;
  form.formEmail.value = "";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailValue = form.formEmail.value;

  if (emailValue === "") {
    alertInfo("Whoops, make sure it is an email");
  } else if (!emailRegEx.test(emailValue)) {
    alertInfo("Please, provide a valid email address");
  } else {
    alertInfo("You have succesffully subscribe for the weekly newsletter");
  }
});
