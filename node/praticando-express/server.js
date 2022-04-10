const express = require('express');
const app = express();
const port = 3000;

app.use(
    express.urlencoded({ extended: true })
);

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome do Cliente: <input type="text" name="name">
            <button type="submit">Enviar Dados</button>
        </form>
    `);
});

app.post('/', (req, res) => {
    const username = req.body.name;
    res.send(`Dado enviado: ${username}`);
});

app.listen(port, () => {
    console.log('Acessar http://localhost:' + port);
});
