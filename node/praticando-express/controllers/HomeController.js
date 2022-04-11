exports.contact = (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="name">
            <button type="submit">Enviar Dados</button>
        </form>
    `);
}

exports.contactAction = (req, res) => {
    const username = req.body.name;
    res.send(`Nome do usuário: ${username}`);
}
