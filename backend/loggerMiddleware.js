// loggerMiddleware.js
function loggerMiddleware(req, res, next) {
    res.on('finish', () => {
        console.log(
            `[${new Date().toISOString()}] ${req.method} ${req.url} ${res.statusCode}`
        );
    });

    next();
}

module.exports = loggerMiddleware;