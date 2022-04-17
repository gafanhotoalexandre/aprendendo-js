exports.contact = (req, res, next) => {
    res.render('index', {
        title: 'Título da Página',
        numbers: [0, 1, 2, 3, 4 ,5, 12],
    });
    return;
}

exports.contactAction = (req, res) => {
    const username = req.body.name || 'Convidado';
    res.send(`Nome do usuário: ${username}`);
}
