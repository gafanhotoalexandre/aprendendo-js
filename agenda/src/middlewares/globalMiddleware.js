exports.globalMiddleware = (req, res, next) => {
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

exports.checkCSRFError = (error, req, res, next) => {
    if (error) {
        return res.render('error');
    }
    next();
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};

exports.loginRequired = (req, res, next) => {
    if (! req.session.user) {
        req.flash('errors', 'Você precisa fazer o login');
        // salvando a sessão e redirecionando o usuário não autenticado.
        req.session.save(() => res.redirect('/'));
        return;
    }
    next();
};
