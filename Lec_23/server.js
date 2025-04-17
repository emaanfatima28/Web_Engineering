const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authRoutes = require('./protected.js');
const { users } = require('./auth.js');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.name === username && user.password === password);

    if (!user) {
        return res.status(401).send('Invalid username or password');
    }

    const token = jwt.sign(
        { username: user.name, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );

    res.json({ token });
});

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
