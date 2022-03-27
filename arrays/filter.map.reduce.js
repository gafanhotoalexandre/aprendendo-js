// Retornar a soma do dobro de todos os valores pares

const numbers = [1, 23, 41, 15, 12, 21, 22, 64];
const pairNumbers = numbers.filter(number => number % 2 === 0);
const doubleNumbers = pairNumbers.map(number => number * 2);
const sum = doubleNumbers.reduce((accumulator, number) => accumulator + number);

console.log(pairNumbers);
console.log(doubleNumbers);
console.log(sum);

// reduzindo tudo
const sumDoublePairNumbers = numbers
    .filter(number => number % 2 === 0)
    .map(number => number * 2)
    .reduce((accumulator, number) => accumulator + number);

console.log(sumDoublePairNumbers);
