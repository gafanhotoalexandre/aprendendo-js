const mongoose = require('mongoose');
const validator = require('validator');

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    surname: { type: String, required: false, default: '' },
    email: { type: String, required: false, default: '' },
    phone: { type: String, required: false, default: '' },
    createdAt: { type: Date, default: Date.now },
});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact (body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

// métodos estáticos
Contact.findById = async function (id) {
    if (typeof id !== 'string') return;

    const contact = await ContactModel.findById(id);
    return contact;
}

Contact.all = async function () {
    const contacts = await ContactModel.find()
        .sort({ createdAt: -1 });// 1 crescente, -1 decrescente
    return contacts;
}

Contact.delete = async function (id) {
    if (typeof id !== 'string') return;
    const contact = await ContactModel.findOneAndDelete({ _id: id });
    return contact;
}

// prototypes
Contact.prototype.register = async function () {
    this.validate();

    if (this.errors.length > 0) return;

    this.contact = await ContactModel.create(this.body);
}

Contact.prototype.validate = function () {
    this.cleanUp();

    // nome (se for enviado)
    if (! this.body.name) this.errors.push('"Nome" é um campo obrigatório.');
    // email valido, senha entre 3 e 50 caracteres
    if (this.body.email && ! validator.isEmail(this.body.email)) this.errors.push('Email inválido!');

    if (! this.body.email && ! this.body.phone) {
        this.errors.push('Pelo menos um contato deve ser cadastrado: e-mail ou telefone.');
    }

}

Contact.prototype.cleanUp = function () {
    for (const key in this.body) {
        if (typeof this.body[key] !== 'string') {
            this.body[key] = '';
        }
    }
    // definindo campos desejados
    this.body = {
        name: this.body.name,
        surname: this.body.surname,
        email: this.body.email,
        phone: this.body.phone
    };
}

Contact.prototype.update = async function (id) {
    if (typeof id !== 'string') return;

    this.validate();
    if (this.errors.length > 0) return;

    this.contact = await ContactModel.findByIdAndUpdate(id, this.body, { new: true });
}


module.exports = Contact;
