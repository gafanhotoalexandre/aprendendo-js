function Calculator() {
    this.display = document.querySelector('.display');

    this.init = () => {
        this.catchClicks();
        this.pressEnter();
    };

    this.catchClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;

            if (el.classList.contains('btn-num')) this.addNumDisplay(el.innerText);
            if (el.classList.contains('btn-clear')) this.clearDisplay();
            if (el.classList.contains('btn-del')) this.delete();
            if (el.classList.contains('btn-eq')) this.calculate();
        });
    };

    this.addNumDisplay = (value) => {
        this.display.value += value;
        // aplicando foco no display, para que o cálculo possa ser efetuado ao apertar Enter
        this.display.focus();
    }

    this.clearDisplay = () => this.display.value = '';

    this.delete = () => this.display.value = this.display.value.slice(0, -1);

    this.calculate = () => {
        let count = this.display.value;

        try {
            count = eval(count);
            // erro
            if (!count && count !== 0) {
                console.log(count);
                alert('Cálculo Inválido!');
                return;
            }
            // sucesso
            this.display.value = count;
        } catch (error) {
            alert('Cálculo Inválido!');
            return;
        }
    };

    this.pressEnter = () => {
        this.display.addEventListener('keyup', (event) => {
            if (event.keyCode === 13) {
                this.calculate();
            }
        });
    };
}

const calculator = new Calculator();
calculator.init();
