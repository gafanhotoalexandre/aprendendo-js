const mongoose = require('mongoose');

const LoginSchema = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true }
});

const LoginModel = mongoose.model('Login', LoginSchema);

class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    register() {
        this.validate();
    }

    validate() {
        this.cleanUp();
        // email valido, senha entre 3 e 50 caracteres
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        // definindo campos desejados
        this.body = {
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;
