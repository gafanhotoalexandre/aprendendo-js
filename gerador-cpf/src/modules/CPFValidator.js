export default class CPFValidator {
    constructor(cpf) {
        Object.defineProperty(this, 'cleanCPF', {
            writable: false,
            enumerable: true,
            configurable: false,
            value: cpf.replace(/\D+/g, ''),
        });
    }

    cpfGenerate() {
        const partialCPF = this.cleanCPF.slice(0, -2);
        const firstDigit = CPFValidate.digitGenerate(partialCPF);
        const secondDigit = CPFValidate.digitGenerate(partialCPF + firstDigit);

        const newCPF = partialCPF + firstDigit + secondDigit;
        return newCPF;
    }
    static digitGenerate(partialCPF) {
        const arrayCPF = partialCPF.split('');
        let regressive = partialCPF.length + 1;

        const total = arrayCPF.reduce((accumulator, value) => {
            accumulator += regressive * Number(value);
            regressive--;
            return accumulator;
        }, 0);

        const digit = 11 - (total % 11);
        return digit > 9 ? '0' : String(digit);
    }
    validate() {
        if (! this.cleanCPF || this.cleanCPF === 'undefined') return false;
        if (this.cleanCPF.length !== 11) return false;
        if (this.isSequence()) return false;

        const newCPF = this.cpfGenerate();
        return newCPF === this.cleanCPF;
    }
    isSequence() {
        const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
        return this.cleanCPF === sequence;
    }
}
