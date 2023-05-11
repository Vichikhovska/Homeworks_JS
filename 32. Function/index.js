//min 1
//Напиши всі можливі варіанти створення функцій.

    // first type - function declaration
    function hello (parametr) {
      console.log("hi");
    }
    hello();

    // second type - function expression 
    const something = function (parametr2) {
      console.log("hi");
    }
    something();

    // third type - arrow function expressions
    const someThing = (parametr3) => console.log("hi");
    someThing();

    // fourth type - new Function
    const something2 = new Function("a", "b", "console.log(a)");
    something2();

//min 2
// Створи функцію, яка буде виводити кількість переданих їй аргументів.

const calcArguments = function () {
  return(arguments.length)
};

//min 3
/* Напиши функцію, яка приймає 2 числа і повертає :
-1, якщо перше число менше, ніж друге; 
1 - якщо перше число більше, ніж друге; 
0 - якщо числа рівні. */

const number1 = prompt("enter first random number");
const number2 = prompt("enter second random number");

function getNumber(number1, number2) {
  if (number1 < number2) {
    return -1;  
  } else if (number1 > number2) {
    return 1;
  } else if (number1 === number2) {
    return 0;
  }
}
getNumber();

//OR

const getNumber = (number1, number2) => {
  if (number1 < number2) {
    return -1;  
  } else if (number1 > number2) {
    return 1;
  } else if (number1 === number2) {
    return 0;
  }
};

//min 4
// Напиши функцію, яка обчислює факторіал переданого їй числа.

function factorial(x) { 

  if (x === 0) {
    return 1
  } else {
    return x * factorial(x-1);
  }
}

//min 5
/* Напиши функцію, яка приймає три окремі цифри і перетворює їх в одне число. 
Наприклад: цифри 1, 4, 9 перетворяться в число 149. */

const merger = (num1, num2, num3) => {
  const parametr = [num1, num2, num3].join("");
  return parametr;
}
console.log(merger (1, 4, 9));

//min 6
/* Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу. 
Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата. */


const calcArea = (width, length) => {
  if (width !== length) {
     return width * length;
  } else if (width === length) {
    return width * width;
  }
}
console.log(calcArea(4, 4))

// normal 1
/* Напиши функцію, яка перевіряє, чи є передане їй число “досконалим числом”. Досконале число - це число, 
яке дорівнює сумі всіх своїх дільників. */

function findPerfect(number) {
let sum = 0;
for (let index = 0; index <= (number / 2); index++) {
  if ((number % index) == 0) {
    sum += index;
  }
}

if (sum === number && sum !== 0) {
  return true;
} else false
};

findPerfect();

// normal 2
/* Напиши функцію, яка приймає мінімальне і максимальне значення для діапазону, і виводить тільки ті числа з діапазону, 
які є досконалими. Використовуй написану раніше функцію, щоб дізнатися, чи є це число досконалим. */

//i don`t know