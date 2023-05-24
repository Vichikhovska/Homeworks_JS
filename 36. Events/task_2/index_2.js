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
  let rows, index, x, y, needSwitch, switchCount = 0;
  const table = document.querySelector(".table_container");
  const switching = true;
  const direction = "ascending";

  while (switching) {
    switching = false;
    rows = table.rows;

    for (index = 1; index < (rows.length - 1); index++) {
      needSwitch = false;
        x = rows[index].querySelectorAll("TD")[item];
        y = rows[index + 1].querySelectorAll("TD")[item];

        if (direction === "ascending") {
          if (+(x.innerHTML) > +(y.innerHTML)) {
            needSwitch = true;
            break;
          }
        } else if (direction === "descending") {
          if (+(x.innerHTML) < +(y.innerHTML)) {
            needSwitch = true;
            break;
          }
        }
    }
    
    if (needSwitch) {
      rows[index].parentNode.insertBefore(rows[index + 1], rows[index]);
      switching = true;
      switchCount++;
    } else {
      if (switchCount === 0 && direction === "ascending") {
        direction = "descending";
        switching = true;
      }
    }
  }
}








