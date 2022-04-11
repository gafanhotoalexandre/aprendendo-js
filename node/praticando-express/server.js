const express = require('express');
const path = require('path');
const app = express();

const routes = require('./routes');

const port = 3000;

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(port, () => {
    console.log('Acessar http://localhost:' + port);
});
