import CPFGenerator from './modules/CPFGenerator';

import './assets/css/style.css';

(function() {
    const generator = new CPFGenerator();
    const cpf = generator.generateNewCPF();

    const result = document.querySelector('#result');
    result.innerText = cpf;
})();
