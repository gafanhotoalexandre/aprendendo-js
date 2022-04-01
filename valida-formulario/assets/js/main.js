class FormValidate {
    constructor() {
        this.form = document.querySelector('#main-form');
        this.events();
    }

    events() {
        this.form.addEventListener('submit', event => {
            this.handleSubmit(event);
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const validFields = this.checkFields();
    }

    checkFields() {
        let valid = true;

        for (let field of this.form.querySelectorAll('.validate')) {
            if (! field.value) {
                this.createError(field, 'O campo não pode estar em branco!');
                valid = false;
            }
        }
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.classList.add('error-message');
        div.innerText = message;
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new FormValidate();
