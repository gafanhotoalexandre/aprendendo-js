const numbers = [1, 23, 41, 15, 12, 21, 22, 64];
const total = numbers.reduce((accumulator, value) => {
    if (value % 2 === 0) {
        accumulator += value;
    }
    return accumulator;
}, 0);

// console.log(total);

const people = [
    { name: 'Alexandre', age: 20 },
    { name: 'Verônica', age: 21 },
    { name: 'Guilherme', age: 16 },
    { name: 'Marina', age: 3 },
    { name: 'Maria', age: 20 },
    { name: 'Daniel', age: 19 }
];

const older = people.reduce((accumulator, person) => {
    if (accumulator.age > person.age) return accumulator;
    return person;
});

const newest = people.reduce((accumulator, person) => {
    if (accumulator.age < person.age) return accumulator;
    return person;
});

console.log('Mais velho(a):', older);
console.log('Mas novo(a):', newest);

