import passwordGenerator from "./generators";

const qtyCaracters = document.querySelector('.qty');
const chkUpperCase = document.querySelector('.chk-uppercase');
const chkLowerCase = document.querySelector('.chk-lowercase');
const chkNumber = document.querySelector('.chk-number');
const chkSymbol = document.querySelector('.chk-symbol');
const generatePassword = document.querySelector('.generate-password');

const result = document.querySelector('#result');

export default () => {
    generatePassword.addEventListener('click', () => {
        result.innerText = generate();
    });
};

function generate() {
    const password = passwordGenerator(
        qtyCaracters.value,
        chkUpperCase.checked,
        chkLowerCase.checked,
        chkNumber.checked,
        chkSymbol.checked
    );

    return password || 'Nada selecionado';
}
