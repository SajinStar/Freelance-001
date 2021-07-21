document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      document.body.style.paddingTop = "0";
    }
  });
});

const swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

const swiper2 = new Swiper(".swiper-container2", {
  // Optional parameters
  loop: true,
  speed: 500,
  // If we need pagination

  slidesPerView: 3,
  spaceBetween: 10,
  // Navigation arrows

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    // when window width is >= 480px
    450: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    900: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

function openNav() {
  document.getElementById("mySidenav").style.width = "350px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



const searchIp = document.querySelector(".searchIP");

const suggestionsList = document.querySelector(".suggestions");
const data = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

searchIp.addEventListener("keyup", (e) => {
  let userVal = e.target.value;
  let filterVal = [];
  if (userVal) {
    filterVal = data.filter((item) =>
      item.toLowerCase().startsWith(userVal.toLowerCase())
    );
  }

  filterVal = filterVal.map((item) => `<li> ${item} </li>`);

  populateDom(filterVal);
});

function populateDom(val) {
  suggestionsList.innerHTML = "";
  val.forEach((element) => {
    suggestionsList.innerHTML += element;
  });
}