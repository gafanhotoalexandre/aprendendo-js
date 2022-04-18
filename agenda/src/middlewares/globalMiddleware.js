exports.globalMiddleware = (req, res, next) => {
    res.locals.localVariable = 'Este é o valor da variável local';
    next();
};

exports.checkCSRFError = (error, req, res, next) => {
    if (error && error.code === 'EBADCSRFTOKEN') {
        return res.render('error');
    }
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
};
