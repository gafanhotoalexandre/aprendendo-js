const { Router }= require('express');
const router = Router();

const HomeController = require('./src/controllers/HomeController');
const LoginController = require('./src/controllers/LoginController');

router.get('/', HomeController.index);

// rotas de login
router.get('/login', LoginController.index);

// exportando rotas
module.exports = router;
