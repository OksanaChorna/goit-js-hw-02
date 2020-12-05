let input;
const numbers = [];
let total = 0;

numbers.push(input);

do {
  input = prompt("Введите число");
  total += Number(input);
} while (input !== null);
console.log(`Общая сумма чисел равна ${total}`);

// if (Number.isNaN(input)) {
//   alert("Было введено не число, попробуйте еще раз");
// } else {
//   numbers.push(input);
// }

// input = prompt("Введите число");
// for (let i = 0; i <= null; i += 1) {
//   total += Number(input);
// }
