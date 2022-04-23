const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({

});

const ContactModel = mongoose.model('Contact', ContactSchema);

function Contact (body) {
    this.body = body;
    this.errors = [];
    this.contact = null;
}

Contact.prototype.register = function () {

}

module.exports = Contact;
