//min
/* Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, 
  середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), 
  і наступні методи для роботи з цим об'єктом:
    1. Метод, який виводить на екран інформацію про автомобіль.*/

const myCar = {
  producer: "Hundai",
  model: "Tucson",
  year: 2017,
  fast: 90,
  container: 20,
  fuelConsumption: 5,
  driver: "ledy"
}
myCar.driverTwo = "Ivan";   //2. Додавання ім’я водія у список

console.log ("driverTwo" in myCar)  //3. Перевірка водія на наявність його ім’я у списку                         
// or
if (typeof myCar.driverTwo !== undefined) {
  console.log (true)
} else false
// or
console.log(myCar.hasOwnProperty("driverTwo"));

    /*4. Підрахунок необхідного часу та кількості палива для подолання переданої відстані 
    з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. */

// dont know

// normal
/*Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
    1. Для виведення часу на екран. */

    let hours = +prompt("Enter hours");
    let minutes = +prompt("Enter minutes");
    let seconds = +prompt("Enter seconds");

    let time = (`${hours}:${minutes}:${seconds}`);

    //2. Зміни часу на передану кількість секунд.
    function countSeconds() {
      while (seconds >= 60) {
        seconds -= 60;
        minutes += 1;
      }
    }
    //3. Зміни часу на передану кількість хвилин.
    function countMinutes() {
      while (minutes >= 60) {
        minutes -= 60;
        hours += 1;
      }
    }
    //4. Зміни часу на передану кількість годин.
    function countHours() {
      while (hours = 24) {
        hours -= 24;
      }
    }
    /*5. Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. 
    Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». 
    Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.*/

    let changeTime = +prompt("how many seconds you want to add?")
    function timer() {
      
    }

    console.log(timer);