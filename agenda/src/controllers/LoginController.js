const Login = require('../models/LoginModel');

exports.index = (req, res) => {
    console.log(req.session.user);
    res.render('login');
};

exports.login = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.login();

        // apresentando feedback
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }
    
        req.flash('success', 'Você entrou no sistema.');
        req.session.user = login.user;
        req.session.save(() => {
            return res.redirect('/login');
        });
    } catch (e) {
        console.log(e);
        res.render('error');
    }
};

exports.register = async (req, res) => {

    try {
        const login = new Login(req.body);
        await login.register();
    
        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
                return res.redirect('/login');
            });
            return;
        }
    
        req.flash('success', 'Seu usuário foi criado com sucesso.');
        req.session.save(() => {
            return res.redirect('/login');
        });
    } catch (e) {
        console.log(e);
        return res.render('error');
    }
};
