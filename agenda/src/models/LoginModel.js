const mongoose = require('mongoose');
const validator = require('validator');
const bcryptjs = require('bcryptjs');

const LoginSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
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

    async login() {
        this.validate();
        if (this.errors.length > 0) return;

        this.user = await LoginModel.findOne({ email: this.body.email });

        // usuário existe?
        if (! this.user) {
            this.errors.push('Usuário não existe');
            return;
        }

        // verificando senha
        if (! bcryptjs.compareSync(this.body.password, this.user.password)) {
            this.errors.push('Usuário e/ou Senha inválidos.');
            // retirando dados de usuário no caso da senha incorreta
            this.user = null;

            return;
        }

    }

    async register() {
        this.validate();

        // checando ocorrência de erros
        if (this.errors.length > 0) return;

        await this.userExists();

        // checando ocorrência de erros
        if (this.errors.length) return;

        const salt = bcryptjs.genSaltSync();
        this.body.password = bcryptjs.hashSync(this.body.password, salt);
            
        // criando usuário
        this.user = await LoginModel.create(this.body);
    }

    async userExists() {
        const user = await LoginModel.findOne({ email: this.body.email });

        if (user) this.errors.push('Usuário já existente.');
    }

    validate() {
        this.cleanUp();

        // nome (se for enviado)
        if (this.body.fullname && this.body.fullname.length < 3) this.errors.push('O nome deve possuir ao menos 3 caracteres.');

        // email valido, senha entre 3 e 50 caracteres
        if (! validator.isEmail(this.body.email)) this.errors.push('Email inválido!');

        if (this.body.password.length < 3 || this.body.password.length > 50) {
            this.errors.push('A senha deve ter entre 3 e 50 caracteres.');
        }
    }

    cleanUp() {
        for (const key in this.body) {
            if (typeof this.body[key] !== 'string') {
                this.body[key] = '';
            }
        }

        // definindo campos desejados
        this.body = {
            fullname: this.body.fullname,
            email: this.body.email,
            password: this.body.password
        };
    }
}

module.exports = Login;

