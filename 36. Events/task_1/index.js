/*Створити HTML-сторінку для відображення/редагування тексту. 
При відкритті сторінки текст відображається за допомогою тега div. 
При натисканні Ctrl + E, замість div з'являється textarea з тим же текстом, 
який тепер можна редагувати. При натисканні Ctrl + S, замість textarea з'являється 
div з уже зміненим текстом. Не забудь вимкнути поведінку за замовчуванням для цих поєднань клавіш.*/

const parentDiv = document.querySelector(".parent_box");
const div = document.querySelector(".parent_box_text");
const textarea = document.querySelector(".textarea_box");

function toggleEditMode () {
  if (parentDiv.style.display === "none") {
    const userText = textarea.value;
    div.textContent = userText;

    parentDiv.style.display = "block";
    textarea.style.display = "none";
  } else {
    const currentText = div.textContent;
    textarea.value = currentText;

    parentDiv.style.display = "none";
    textarea.style.display = "block";
  }
}

document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.key === "e") {
    toggleEditMode();
    event.preventDefault();
  } 
  
  if (event.ctrlKey && event.key === "s") {
    event.preventDefault();

    if (textarea.style.display === "block") {
      toggleEditMode();
    };
  };
});

