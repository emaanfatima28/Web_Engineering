const jwt = require('jsonwebtoken');
require('dotenv').config();

function authenticateToken(req, res, next) {
    let authHeader = req.headers['authorization'];
    let token = authHeader.split(' ')[1]; 
    if (!token) return res.sendStatus(401); // Unauthorized

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Forbidden
        req.user = user;
        next();
    });
}

function authorizationRole(...allowedRoles) {
    return (req, res, next) => {
        if (!req.user || !allowedRoles.includes(req.user.role)) {
            return res.sendStatus(403).message("Not allowed to access"); // Forbidden
        }
        next();
    };
}

module.exports = {
    authenticateToken,
    authorizationRole
};