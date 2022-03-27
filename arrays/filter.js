const numbers = [12, 15, 45, 22, 50, 75, 34, 99];
const filteredNumbers = numbers.filter(number => number >= 50);

// console.log(numbers, filteredNumbers);

// nome com 5 letras ou mais
// pessoas com mais de 20 anos
// pessoas cujo nome termina com "a"
const people = [
    { name: 'Alexandre', age: 20 },
    { name: 'Verônica', age: 21 },
    { name: 'Guilherme', age: 16 },
    { name: 'Marina', age: 3 },
    { name: 'Maria', age: 20 },
    { name: 'Daniel', age: 19 }
];

const filteredPeople = people.filter(person => person.name.length >= 5);
const filteredAgePeople = people.filter(person => person.age > 20);
// const filteredLastLetterPeople = people.filter(person => person.name.toLowerCase().slice(-1) === 'a');
const filteredLastLetterPeople = people.filter(person => person.name.toLowerCase().endsWith('a'));

console.log(filteredPeople, filteredAgePeople);
console.log(filteredLastLetterPeople);
