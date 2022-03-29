
function CPFValidate(cpf) {
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

CPFValidate.prototype.validate = function () {
    if (typeof this.cleanCPF === 'undefined') return false;
    if (this.cleanCPF.length !== 11) return false;

    const parcialCPF = this.cleanCPF.slice(0, -2);
    const firstDigit = this.createDigit(parcialCPF);

    return true;
};
CPFValidate.prototype.createDigit = function (parcialCPF) {
    const cpfArray = Array.from(parcialCPF);

    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((accumulator, value) => {
        accumulator += regressive * Number(value);
        console.log(value, regressive, regressive * value);
        regressive--;
        return accumulator;
    }, 0);

    const digit = 11 - (total % 11);

    console.log(digit);
};


const cpf = new CPFValidate('705.484.450-52');
console.log(cpf.validate());
