const { Router }= require('express');
const router = Router();

const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');
const ContactController = require('./src/controllers/ContactController');

const { loginRequired } = require('./src/middlewares/globalMiddleware');

router.get('/', HomeController.index);

// rotas de login
router.get('/login', LoginController.index);
router.post('/login/register', LoginController.register);
router.post('/login/do', LoginController.login);
router.get('/login/logout', LoginController.logout);

// rotas de contato
router.get('/contato', loginRequired, ContactController.index);
router.post('/contato/register', loginRequired, ContactController.register);

router.get('/contato/:id', loginRequired, ContactController.edit);

// exportando rotas
module.exports = router;
