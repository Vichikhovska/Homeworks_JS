//min 1
/*Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, 
кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:*/

const shopingList = [
  {
    name: "orange",
    quantity: 5,
    bougth: true,
    price: 10,
    sum: 50,
  },
  {
    name: "avocado",
    quantity: 5,
    bougth: false,
    price: 35,
    sum: 175,
  },
  {
    name: "tomato",
    quantity: 2,
    bougth: true,
    price: 20,
    sum: 40,
  },
  {
    name: "milk",
    quantity: 1,
    bougth: false,
    price: 40,
    sum: 40,
  }
]

    //min 1.1
    //Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

    shopingList.sort(function (bougthTrue, bougthFalse) {
      const a = bougthTrue.bougth;
            b = bougthFalse.bougth;
      return a === b ? 0 : a > b ? 1 : -1;
    });

    console.table(shopingList);

    //min 1.2
    // Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.



// normal 1
/*Видалення продукту зі списку (видалення повинно проводитися шляхом створення нового масиву, 
  в якому продукт, що ми шукаємо, буде відсутнім)*/

  // const deletedProduct = shopingList.shift();

  //or
  const deletedProduct = shopingList.pop();
  console.table(shopingList);


//nirmal 2
/*Додавання покупки в список. Враховуй, що при додаванні покупки з уже існуючим в списку продуктом, 
необхідно збільшувати кількість в існуючій покупці, а не додавати нову. 
При цьому також повинна змінитися сума, наприклад, якщо ціна за одиницю 12, 
а кількості товарів стало 2, то сума буде 24.*/

const addedProduct = [{
  name: "pizza",
  quantity: 3,
  bougth: false,
  price: 140,
  sum: 520,
},
{
  name: "milk",
  quantity: 2,
  bougth: false,
  price: 40,
  sum: 80,
}];

shopingList.push(...addedProduct);
console.table(shopingList);

//max 1
//Підрахунок суми всіх продуктів (враховуючи кількість кожного) в списку.

const sumProduct = shopingList.reduce( (zero, product) => zero + product.sum, 0); 
console.log (sumProduct);

// max 2
//Підрахунок суми всіх (не) придбаних продуктів.

const notBougthProduct = shopingList.filter(item => item.bougth === false);
console.log(notBougthProduct);

const sumNotBougthProduct = notBougthProduct.reduce( (zero, notBougthProduct) => zero + notBougthProduct.sum, 0);
console.log (sumNotBougthProduct);

// max 3
/*Показання продуктів в залежності від суми, (від більшого до меншого / від меншого до більшого, 
в залежності від параметра функції, який вона приймає)*/

const sortedList = shopingList.sort((firstItem, nextItem) => firstItem.sum - nextItem.sum);
console.table(sortedList);

const sortedListReverse = shopingList.sort((firstItem, nextItem) => nextItem.sum - firstItem.sum);
console.table(sortedListReverse);