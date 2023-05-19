//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

// const red = document.querySelector(".red_color");
// const yellow = document.querySelector(".yellow_color");
// const green = document.querySelector(".green_color");
// const button = document.querySelector(".lsn-button");

// button.addEventListener("click", () => {
//   red.style.background = "red";
// })

const trafficLights = ["red", "yellow", "green"];
const realTrafficLights = document.querySelectorAll(".traffic_lights");
const button = document.querySelector(".lsn-button");
let index = 0;

const changeColor = (index) => {
  realTrafficLights[`${index}`].style.background = trafficLights[`${index}`];
};


button.addEventListener("click", () => {
  
})
