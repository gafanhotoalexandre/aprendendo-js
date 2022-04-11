const { Router }= require('express');
const router = Router();

const HomeController = require('./src/controllers/HomeController');

router.get('/', HomeController.contact);

router.post('/', HomeController.contactAction);


// exportando rotas
module.exports = router;
