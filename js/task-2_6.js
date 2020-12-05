let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введите число");

  if (Number.isNaN(Number(input))) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(input);
  }
} while (input !== null);

if (numbers.length > 0) {
  for (const number of numbers) {
    // todo: use for of`
    total += Number(number);
  }
}

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
