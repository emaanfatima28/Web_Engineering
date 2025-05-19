const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://mongo:27017/userdb')

const User = mongoose.model('User', { name: String, email: String });

app.get('/users', async (_, res) => {
    const users = await User.find();
    res.json(users);
}
);

app.post('/users',async(req,res)=>{
    const user = await new User(req.body);
    res.status(201).json(user);
});

app.listen(3001, () => {
    console.log('User service is running on port 3001');
});