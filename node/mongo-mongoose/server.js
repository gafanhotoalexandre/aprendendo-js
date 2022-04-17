require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString)
    .then(() => {
        console.log('Conexão realizada');
        app.emit('ok');
    })
    .catch(error => console.log(error));

const routes = require('./routes');

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.on('ok', () => {
    app.listen(port, () => {
        console.log('Acessar http://localhost:' + port);
    });
});

