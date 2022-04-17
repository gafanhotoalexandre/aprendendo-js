exports.contact = (req, res, next) => {
    console.log(req.flash('error'), req.flash('success'), req.flash('info'));
    res.render('index');
    return;
}

exports.contactAction = (req, res) => {
    const username = req.body.name || 'Convidado';
    res.send(`Nome do usuário: ${username}`);
}
