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
        const validPasswords = this.checkPasswords();

        if (validFields && validPasswords) {
            alert('Formulário válido para envio.');
            this.form.submit();
        }
    }

    checkPasswords() {
        let valid = true;

        const password = this.form.querySelector('#password')
        const passwordConfirmation = this.form.querySelector('#password-confirmation');

        if (password.value !== passwordConfirmation.value) {
            this.createError(password, `As senhas não são iguais.`);
            this.createError(passwordConfirmation, `As senhas não são iguais.`);
            valid = false;
        }
        
        if (password.value.length < 6 || password.value.length > 12) {
            this.createError(password, `A senha deve conter entre 6 e 12 caracteres.`);
            valid = false;
        }

        return valid;
    }

    checkFields() {
        let valid = true;

        for (let errorText of this.form.querySelectorAll('.error-message')) {
            errorText.remove();
        }

        for (let field of this.form.querySelectorAll('.validate')) {
            const label = field.previousElementSibling.innerText;

            if (! field.value) {// validação do preenchimento de campo
                this.createError(field, `O campo "${label}" não pode estar em branco!`);
                valid = false;
            }
            if (field.id === 'cpf') {// validação do cpf
                if (! this.cpfValidate(field)) valid = false;
            }
            if (field.id === 'username') {// validação do nome de usuário
                if (! this.userValidate(field)) valid = false;
            }
        }

        return valid;
    }

    cpfValidate(field) {
        const cpf = new CPFValidator(field.value);

        if (! cpf.validate()) {
            this.createError(field, `O CPF informado não é válido!`);
            return false;
        }

        return true;
    }

    userValidate(field) {
        const user = field.value;
        let valid = true;

        if (user.length < 3 || user.length > 12) {
            this.createError(field, `O usuário deve ter entre 3 e 12 caracteres.`);
            valid = false;
        }

        if (! user.match(/^[a-zA-Z0-9]+$/g)) {
            this.createError(field, `O nome de usuário deve conter apenas letras e/ou números.`);
            valid = false;
        }

        return valid;
    }

    createError(field, message) {
        const div = document.createElement('div');
        div.classList.add('error-message');
        div.innerText = message;
        field.insertAdjacentElement('afterend', div);
    }
}

const validate = new FormValidate();
