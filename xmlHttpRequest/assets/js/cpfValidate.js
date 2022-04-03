// CPFs: 705.484.450-52 | 
function CPFValidator(cpf) {
    Object.defineProperty(this, 'cleanCPF', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

CPFValidator.prototype.validate = function () {
    if (typeof this.cleanCPF === 'undefined') return false;
    if (this.cleanCPF.length !== 11) return false;
    if (this.isSequence()) return false;

    const parcialCPF = this.cleanCPF.slice(0, -2);
    const firstDigit = this.createDigit(parcialCPF);
    const secondDigit = this.createDigit(parcialCPF + firstDigit);

    const newCPF = parcialCPF + firstDigit + secondDigit;

    return newCPF === this.cleanCPF;
};
CPFValidator.prototype.createDigit = function (parcialCPF) {
    const cpfArray = Array.from(parcialCPF);

    let regressive = cpfArray.length + 1;
    const total = cpfArray.reduce((accumulator, value) => {
        accumulator += regressive * Number(value);
        regressive--;
        return accumulator;
    }, 0);

    const digit = 11 - (total % 11);

    return digit > 9 ? '0' : String(digit);
};
CPFValidator.prototype.isSequence = function () {
    const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
    return sequence === this.cleanCPF;
};
