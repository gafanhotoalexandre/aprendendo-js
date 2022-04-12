exports.globalMiddleware = (req, res, next) => {
    console.log('Passando pelo middleware global');
    next();
}