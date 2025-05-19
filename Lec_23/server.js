const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./protected');
const users = require('./users');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.name === username && user.password === password);

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const token = jwt.sign(
        { name: user.name, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
console.log(`Token generated for user ${user.name}: ${token}`);
    res.json({ token });
});

app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
