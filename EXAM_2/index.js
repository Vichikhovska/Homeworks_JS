// scroll menu
const menuLinks = document.querySelectorAll(".navigation_menu_list_item_link");

menuLinks.forEach(function(link) {
  link.addEventListener("click", smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();

  const targetSelector = this.getAttribute("data-target");
  const targetElement = document.querySelector(targetSelector);

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth",
    });
  }
};

//swiper header
const swiperHeadBaner = new Swiper(".first", {
  direction: "vertical",
  loop: true,

  pagination: {
    el: ".custom-pag",
    clickable: true,
  },

  navigation: {
    nextEl: ".first-btn-next",
  }
});

//swiper news
const swiperNews = new Swiper(".second", {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 3,
  spaceBetween: 5,

  pagination: {
    el: ".news_pag",
    clickable: true,
  },

  navigation: {
    nextEl: ".news_btn",
    prevEl: ".news_btn",
  },

  autoplay: {
    delay: 4000,
  }
});

//map
let map;

const markerElement = document.createElement("span");
markerElement.classList.add("custom_marker");
markerElement.innerHTML = `<div class="custom_block"></div>`;

async function initMap() {
  const position = { lat: -25.344, lng: 131.031 };
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.querySelector(".parent_main_map"), {
    zoom: 4,
    center: position,
    mapId: "e101cad989624282",
  });

  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
    content: markerElement,
  });
}

initMap();

//form validation
document.querySelector(".myForm").addEventListener("click", function(event) {
    event.preventDefault();
  
    const nameInput = document.querySelector(".input_name");
    const emailInput = document.querySelector(".input_email");
    const successMessage = document.querySelector(".successMessage");
  
    const userName = nameInput.value.trim();
    const userEmail = emailInput.value.trim();
  
    if (userName.length < 3 || userName.length > 30) {
      document.querySelector(".name-error").textContent = "Enter name between 3 to 30 characters";
      return false;
    }
  
    if (!userEmail.includes("@")) {
      document.querySelector(".email-error").textContent = "Enter valid email address";
      return false;
    }
  
    return document.querySelector(".myForm").style.display = "none",
    successMessage.classList.replace("hidden", "visible");
  });
  