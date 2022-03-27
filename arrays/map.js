const numbers = [1, 23, 41, 15, 12, 21, 22, 64];
const modifiedNumbers = numbers.map((number) => `Alexandre - ${number}`);
const double = numbers.map(number => number * 2);

// console.log(modifiedNumbers);
// console.log(double);

const people = [
    { name: 'Alexandre', age: 20 },
    { name: 'Verônica', age: 21 },
    { name: 'Guilherme', age: 16 },
    { name: 'Marina', age: 3 },
    { name: 'Maria', age: 20 },
    { name: 'Daniel', age: 19 }
];

const names = people.map(person => person.name);
const ages = people.map(person => ({ age: person.age }));
// const idAddedPeople = people.map(person => ({ id: Math.floor(Math.random() * (100 - 1) + 1), name: person.name, age: person.age })); -> foi o meu jeito
const idAddedPeople = people.map((person, index) => {
    const newPerson = { id: (index + 1), ...person };
    return newPerson;
});

console.log(names);
console.log(ages);
console.log(idAddedPeople);
console.log(people);
