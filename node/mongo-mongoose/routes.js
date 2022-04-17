const { Router }= require('express');
const router = Router();

const HomeController = require('./src/controllers/HomeController');

function myMiddleware(req, res, next) {
    console.log('Passei no middleware');
    next();
}

router.get('/', myMiddleware, HomeController.contact, (req, res, next) => console.log('Ainda estou aqui...'));
router.post('/', HomeController.contactAction);

// exportando rotas
module.exports = router;
