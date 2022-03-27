const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i of numbers) {
    // console.log(i);
}

numbers.forEach((value, index) => console.log(`[${index}] -> ${value}`));

let total = 0;
numbers.forEach(value => {
    total += value;
});
console.log(total);
