const people = [
    { id: 3, name: 'Luiz' },
    { id: 2, name: 'Maria' },
    { id: 1, name: 'Helena' },
];

// const newPeople = {};
// for (const { id, name } of people) {
//     newPeople[id] = { id, name };
// }

const newPeople = new Map();
for (const { id, name } of people) {
    newPeople.set(id, { id, name });
}

console.log(people);
console.log(newPeople);

for (const p of newPeople) {
    // console.log(p);
}
newPeople.delete(1);
console.log(newPeople);