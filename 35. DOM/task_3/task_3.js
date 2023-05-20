//Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

const red = document.querySelector(".red_color");
const yellow = document.querySelector(".yellow_color");
const green = document.querySelector(".green_color");
const button = document.querySelector(".lsn-button");

const trafficLights = [red, yellow, green];
let index = 0;

function changeColor() {
  const currentColor = trafficLights[index];

  if (currentColor === red) {
    red.style.background = "red";
    yellow.style.background = "";
    green.style.background = "";
  } else if (currentColor === yellow) {
    yellow.style.background = "yellow";
    red.style.background = "";
    green.style.background = "";
  } else if (currentColor === green) {
    green.style.background = "green";
    red.style.background = "";
    yellow.style.background = "";
  }
  
  index = (index + 1) % trafficLights.length; // це рішення я знайшла в інтернеті
}

button.addEventListener("click", changeColor);



