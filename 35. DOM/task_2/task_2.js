/*Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. 
На модальном вікні повинен бути текст і кнопка "Закрити". 
Спочатку модальне вікно не відображається. 
При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.*/

const modal = document.querySelector(".motivation-box-1");
const firstBtn = document.querySelector(".mtv_btn_1");
const spanFirst = document.querySelector(".close_first");

firstBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

spanFirst.addEventListener("click", () => {
  modal.style.display = "none"
})


const modalSecond = document.querySelector(".motivation-box-2");
const secondBtn = document.querySelector(".mtv_btn_2");
const spanSecond = document.querySelector(".close_second");

secondBtn.addEventListener("click", () => {
  modalSecond.style.display = "block"
})

spanSecond.addEventListener("click", () => {
  modalSecond.style.display = "none"
})