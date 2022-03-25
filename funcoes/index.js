function createMultiplier(multiplier) {
    return function (num) {
        return num * multiplier;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

const number = 3;

console.log(double(number));
console.log(triple(number))