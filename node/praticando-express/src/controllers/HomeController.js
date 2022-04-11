exports.contact = (req, res) => {
    res.render('index');
}

exports.contactAction = (req, res) => {
    const username = req.body.name || 'Convidado';
    res.send(`Nome do usuário: ${username}`);
}
