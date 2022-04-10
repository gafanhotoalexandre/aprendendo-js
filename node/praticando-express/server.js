const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Minha primeira mensagem.');
});

app.get('/contact', (req, res) => {
    res.send(`
        <form action="/contact" method="POST">
            Nome: <input type="text" name="name">
            <button type="submit">Enviar</button>
        </form>
    `);
});

app.post('/contact', (req, res) => {
    res.send('Form recebido!');
});

app.listen(port, () => {
    console.log('Acessar http://localhost:' + port);
});
