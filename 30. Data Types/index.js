// min 1
const num1 = 0.1;
const num2 = 0.2;
const result = (num1 + num2);
console.log(result);

// min 2
const number1 = "1";
const number2 = 2;
const result2 = Number(number1) + number2;
console.log(result2);

// min 3
const flashDrive = 820;
const check = prompt("Specify the memory of your drive(GB) to find out how many files 820mb in size will fit on it");
alert((check * 1000) / flashDrive);


//normal 1
const money = prompt("How much money is in your wallet?");
const price = prompt("how much does a chocolate cost?");
const chocolate = Math.trunc(money / price);
const surrender = money % chocolate;

alert(`You can buy ${chocolate} chocolates and still have ${surrender} dollars`);


//normal 2
const userNum = prompt("write a three-digit number");
const reverseNumber = (n) => n.toString().split("").reverse().join("");

console.log(reverseNumber(userNum)); 


// max 1
const userPercent = prompt("enter amount you want to put on deposit for 2 mounth with interest rate 5% to year")
const mounth = 2;
const percent = 5;
const year = 12;
const deposit = ((percent/100) * year) * mounth * userPercent;

alert(deposit);


// max 2
// Що повернуть вирази:
2 && 0 && 3     //  0

2 || 0 || 3     //  2

2 && 0 || 3     //  3