// de, e inclusive, min até max. Ou de min até (max - 1)
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));

const symbols = ',.;/?^~[]{}-_=!@#$%+&*()';
const generateSymbol = () => symbols[rand(0, symbols.length)];

