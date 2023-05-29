/*Створити HTML-сторінку з великою таблицею. При кліку на заголовок стовпця, необхідно відсортувати 
дані цього стовпця. Врахуй, що числові значення повинні сортуватися як числа, а не як рядки.*/

// const product = document.querySelector(".product");
// const price = document.querySelector(".price");
// const quantity = document.querySelector(".quantity");
// const sum = document.querySelector(".sum");

// product.addEventListener('click', function() {
//   sortTable(0);
// });

// price.addEventListener('click', function() {
//   sortTable(1);
// });

// quantity.addEventListener('click', function() {
//   sortTable(2);
// });

// sum.addEventListener('click', function() {
//   sortTable(3);
// }); 

function sortTable(item) {
  let rows, index, cellX, cellY, needSwitch, switchCount = 0;  //index, cellX та cellY використ щоб пройтись циклом по рядках таблиці
  const table = document.querySelector(".table_container");
  let switching = true;   //потрібно виконати сщртування рядків чи ні
  let direction = "ascending";  //напрям сортування (за зростанням числа)

  while (switching) {  // цикл викон сортування поки switching = true
    switching = false;   //вказує, чи треба продовжувати сортування
    rows = table.rows;

    for (let index = 1; index < (rows.length - 1); index++) {  //перебираю рядки таблиці
      needSwitch = false;  //чи треба переміщати рядки,якщо true, то цей рядок переноситься перед наступним
      cellX = rows[index].querySelectorAll("TD")[item];
      cellY = rows[index + 1].querySelectorAll("TD")[item];

      if (direction === "ascending") {
        if (+(cellX.innerHTML) > +(cellY.innerHTML)) {  // опрівнюю рядки як числа
          needSwitch = true;
          break;
        }
      } else if (direction === "descending") {
      if (switchCount === 0 && direction === "ascending") {         
        if (+(cellX.innerHTML) < +(cellY.innerHTML)) {   // пщрівнюю рядки як числа
          needSwitch = true;
          break;
        }
      }
    }
    //якщо needSwitch = false, switchCount = 0, напрям сортування за зростанням, змінюю напрям на спадання і пишу switching = true, щоб сортування пішло навпаки
    if (needSwitch) {
      rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);
      switching = true;   // щоб сортування продовжилось 
      switchCount++;      // збільшую на одиницю
    } else {
      if (switchCount === 0 && direction === "ascending") {        
        direction = "descending";
        switching = true;
      }
    }
  }
}
}