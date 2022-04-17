require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const connectionString = process.env.CONNECTION_STRING;

const port = 3000;

mongoose.connect(connectionString)
    .then(() => {
        app.emit('ok');
    })
    .catch(error => console.log(error));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const { globalMiddleware } = require('./src/middlewares/globalMiddleware');

app.use(express.static(path.resolve(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// configurando sessão
const sessionOptions = session({
    secret: 'lldfsdklfkdlodfdkflfwslkdlksa aldksaldksldkslskadçd',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTION_STRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
// configurando flash messages
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(globalMiddleware);
app.use(routes);

app.on('ok', () => {
    app.listen(port, () => {
        console.log('Acessar http://localhost:' + port);
    });
});

