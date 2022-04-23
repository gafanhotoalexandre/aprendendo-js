const Contact = require('../models/ContactModel');

exports.index = async (req, res, next) => {
    const contacts = await Contact.all();
    res.render('index', { contacts });
};
