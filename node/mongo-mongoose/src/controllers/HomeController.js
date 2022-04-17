exports.contact = (req, res, next) => {
    res.render('index');
    next();
}

exports.contactAction = (req, res) => {
    const username = req.body.name || 'Convidado';
    res.send(`Nome do usuário: ${username}`);
}
