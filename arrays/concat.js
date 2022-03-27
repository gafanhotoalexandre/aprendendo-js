const numbers = [1, 2, 3];
const newNumbers = [4, 5, 6];

// forma tradicional
console.log(numbers.concat(newNumbers));
// forma moderna
console.log([...numbers, ...newNumbers]);