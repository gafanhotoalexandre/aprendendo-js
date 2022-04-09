// de, e inclusive, min até max. Ou de min até (max - 1)
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);

const generateUpperCase = () => String.fromCharCode(rand(65, 91));
const generateLowerCase = () => String.fromCharCode(rand(97, 123));
const generateNumber = () => String.fromCharCode(rand(48, 58));

const symbols = ',.;/?^~[]{}-_=!@#$%+&*()';
const generateSymbol = () => symbols[rand(0, symbols.length)];

export default function generatePassword(qty, uppercase, lowercase, numbers, symbols) {
    const arrayPassword = [];
    qty = Number(qty);

    for (let i = 0; i < qty; i++) {
        uppercase && arrayPassword.push(generateUpperCase());
        lowercase && arrayPassword.push(generateLowerCase());
        numbers && arrayPassword.push(generateNumber());
        symbols && arrayPassword.push(generateSymbol());
    }

    // retornando a senha da forma desejada
    return arrayPassword.splice(0, qty).join('');
}
