exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'Este é o valor da variável local';
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
