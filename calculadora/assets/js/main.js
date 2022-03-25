function createCalculator() {
    return {

        display: document.querySelector('.display'),

        init() {
            this.buttonsClick();
            this.pressEnter();
        },
        pressEnter() {
            this.display.addEventListener('keyup', event => {
                if (event.keyCode === 13) {
                    this.calculate();
                }
            });
        },
        calculate() {
            let count = this.display.value;

            try {
                count = eval(count);

                if (! count) {
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = count;
            } catch (error) {
                console.log(count);
                alert('Conta inválida! (catch)');
                return;
            }
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
