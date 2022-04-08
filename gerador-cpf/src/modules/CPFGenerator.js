import CPFValidator from './CPFValidator';

export default class CPFGenerator {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    format(cpf) {
        return (
            cpf.slice(0, 3) +  '.' +
            cpf.slice(3, 6) +  '.' +
            cpf.slice(6, 9) +  '-' +
            cpf.slice(9, 11)
        )
    }

    generateNewCPF() {
        const partialCPF = this.rand();
        const firstDigit = CPFValidator.digitGenerate(partialCPF);
        const secondDigit = CPFValidator.digitGenerate(partialCPF + firstDigit);

        const newCPF = partialCPF + firstDigit + secondDigit;
        return this.format(newCPF);
    }
}
