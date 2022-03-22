const fizzBuzz = (value) => {
    if (typeof value !== 'number') return value;

    if (value % 3 === 0 && value % 5 === 0) return 'FizzBuzz';
    if (value % 3 === 0) return 'Fizz';
    if (value % 5 === 0) return 'Buzz';

    return value;
}

console.log('Alexandre', fizzBuzz('Alexandre'));
for (let i = 0; i <= 100; i++) {
    console.log(i, fizzBuzz(i));
}
