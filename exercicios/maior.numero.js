const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const max = (x, y) => x > y ? x : y;

let num1 = random(0, 10);
let num2 = random(0, 10) + (num1 / 2);

const higher = max(num1, num2);
console.log(`Primeiro Valor: ${num1}\nSegundo Valor ${num2},\nMaior: ${higher}`);