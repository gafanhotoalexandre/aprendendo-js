import CPFValidator from './CPFValidator';

export default class CPFGenerator {
    rand(min = 100000000, max = 999999999) {
        return String(Math.floor(Math.random() * (max - min) + min));
    }

    generateNewCPF() {
        const partialCPF = this.rand();
        const firstDigit = CPFValidator.digitGenerate(partialCPF);
        const secondDigit = CPFValidator.digitGenerate(partialCPF + firstDigit);

        const newCPF = partialCPF + firstDigit + secondDigit;
        return newCPF;
    }
}
