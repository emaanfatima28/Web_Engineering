const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const users = require('./users.js'); 

const app = express();
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));            

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);
    
    if (user && bcrypt.compareSync(password, user.password)) {
        req.session.userId = user.id;
        res.status(200).json({ message: 'Login successful' });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
}
);

