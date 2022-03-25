function createCalculator() {
    return {

        display: document.querySelector('.display'),

        init() {
            this.buttonsClick();
        },
        calculate() {
            console.log('calcular');
        },
        clearDisplay() {
            this.display.value = '';
        },
        clearOne() {
            this.display.value = this.display.value.slice(0, -1);
        },
        buttonsClick() {
            document.addEventListener('click', event => {
                const el = event.target;

                if (el.classList.contains('btn-num')) {
                    console.log('Adicionnando número.');
                    this.buttonToDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (el.classList.contains('btn-del')) {
                    this.clearOne();
                }

                if (el.classList.contains('btn-eq')) {
                    this.calculate();
                }
            });
        },
        buttonToDisplay(value) {
            this.display.value += value;
        }
    };
}

const calculator = createCalculator();
calculator.init();
