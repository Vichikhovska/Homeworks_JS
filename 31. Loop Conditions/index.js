// min 1
//Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17), дорослим (18_59) 
//або пенсіонером (60 ...), передбач можливість введення невірних даних.

const userAge = prompt("How old are you?")
if (userAge <= 11) {
  console.log("Child");
} else if (userAge > 11 && userAge <= 17) {
  console.log("Teenager"); 
} else if (userAge >= 18 && userAge <= 59) {
  console.log("Adult");
} else if (userAge >= 60 && userAge < 100) {
  console.log("Pensioner");
} else if (userAge <=0 || userAge > 100 || userAge === String) {
  console.log("Please use only numbers and try again")
}

// min 2 
//Запитай у користувача число від 0 до 9 і виведи йому спецсимвол, який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

const someNumber = prompt("Enter a number from 0 to 9");
if (someNumber = 0) {
  console.log(")");
} else if (someNumber = 1) {
  console.log("!");
} else if (someNumber = 2) {
  console.log("@");
} else if (someNumber = 3) {
  console.log("#");
} else if (someNumber = 4) {
  console.log("$");
} else if (someNumber = 5) {
  console.log("%");
} else if (someNumber = 6) {
  console.log("^");
} else if (someNumber = 7) {
  console.log("&");
} else if (someNumber = 8) {
  console.log("*");
} else if (someNumber = 9) {
  console.log("(");
}

// min 3 
// Підрахуй суму всіх чисел в заданому користувачем діапазоні.

const rangeStart = parseInt(prompt("To calculate the sum of numbers in given range, enter range start"));
const rangeEnd = parseInt(prompt("Now enter the range end"));
const sum = 0;

while (rangeStart < rangeEnd) {
  rangeStart++;

  if(rangeStart < rangeEnd) {
    sum += rangeStart;
  }
}   

console.log(sum);

// min 4 
// Запитай у користувача 2 числа і знайди найбільший спільний дільник.
// підгледіла як робити і розбиралась 2 години

const a = +prompt("Enter first number");
const b = +prompt("Enter second number");

function NOD (a, b) {
	if (b > a) return NOD(b, a);
	if (!b) return a;
	return NOD(b, a % b);
}
console.log(NOD(a, b));

// min 5 
//Запитай у користувача число і виведи всі дільники цього числа.

//i don`t know

//normal 1
//Запитай у користувача п’ятирозрядне число і визначити, чи є воно паліндромом.

const polindrom = prompt("Enter a 5 digit number to determine if it is a palindrome");
const check = polindrom.split('').reverse().join('');

do {
  if (check === polindrom) {
    break;
  } else {
    console.log("It is not a polindrom");
  }

} while (check === polindrom)
console.log("It is a polindrom");


//normal 2
/* Запитай у користувача суму покупки і виведи суму до оплати зі знижкою:
від 200 до 300 - знижка буде 3%; 
від 300 до 500 - 5%;
від 500 і вище - 7%. */

const purchase = +prompt("specify the amount of your purchase to get a discount");
const amountOfPurchases = purchase;
function calculation(discount) {
  let grandTotal = amountOfPurchases - (amountOfPurchases * (discount / 100));

  return(`your discount ${discount}%. ${grandTotal} to be paid.`);
}

if (amountOfPurchases <= 200) {
  alert(`you have not discounts! ${amountOfPurchases}$ to be paid`);
} else if (amountOfPurchases > 200 && amountOfPurchases < 300) {
  alert(calculation(3));
} else if (amountOfPurchases >= 300 && amountOfPurchases < 500) {
  alert(calculation(5));
} else if ( amountOfPurchases >= 500) {
  alert(calculation(7));
}

//normal 3
/* Запитай у користувача 10 чисел і порахуй, скільки він ввів додатніх, від’ємних і нулів. 
При цьому також порахуй, скільки з них парних і непарних. Виведи статистику на екран. 
Враховуй, що достатньо однієї змінної (не 10) для введення чисел користувачем. */

//i don`t know

//normal 4
/* Зацикли відображення днів тижня таким чином: «День тижня. Хочеш побачити наступний день?» 
і так до тих пір, поки користувач натискає OK. */

const week = [
  "Monday", 
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

for (let index = 0; index < week.length; index++) {
    let question = alert("Would you like to see next day?");

    if(question) true; {
      alert(week[index]); 
    } 
  }