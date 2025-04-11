const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();
const users = require('./users.js'); 

const app = express();
app.use(express.json());

function generateToken(user){
    return jwt.sign({ id: user.id,
        email: user.email,
     }, process.env.JWT_SECRET, { expires: '1h' });
}

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email);
    
    if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    if (!bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);
    return res.status(200).json({message: 'LogIn Successful',token })
}   );

app.post('/profile', (req, res) => {
const authHeader = req.headers.authorization;
if (!authHeader) {
    return res.status(401).json({ message: 'Unauthorized' });   
}
const token = authHeader.split(' ')[1];
try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = users.find(user => user.id === decoded.id);
    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }
    return res.status(200).json({ message: 'Profile fetched successfully', user }); 
}catch(err) {
    return res.status(401).json({ message: 'Invalid token' });
}
});

app.listen(3000, () => {    
console.log('Server is running on port 3000'); 
});