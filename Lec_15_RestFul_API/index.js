const express = require('express');
const { v4: uuidv4 } = require('uuid');
const joi = require('joi');

const app = express();
app.use(express.json()); 

const schema = joi.object({
    name: joi.string().min(3).max(20).required(),
    phone: joi.string().pattern(/^\d+$/).required(),
    email: joi.string().email().required()
});

const myfriend = [
    {
        name: 'Emaan',
        email: 'emaan@gmail.com',
        phone: '1234567890'
    },
    {
        name: 'Fatima',
        email: 'fatima@gmail.com',
        phone: '0987654321'
    }
];

app.get('/myfriend', (req, res) => {
    res.json(myfriend);
});

app.get('/api/myfriend/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= myfriend.length) {
        return res.status(404).send('Friend not found');
    }

    return res.json(myfriend[index]);
});

app.post('/api/myfriend', (req, res) => {
    const result = schema.validate(req.body);

    if (result.error) {
        return res.status(400).json({ errormessage: result.error.details[0].message });
    }

    const friend = {
        id: uuidv4(), 
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone
    };
    myfriend.push(friend);

    res.status(201).json({ message: 'Friend data is valid and stored successfully', friend });
});

app.patch('/api/myfriend/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= myfriend.length) {
        return res.status(404).json({ message: 'No friend at this index exists' });
    }

    if (req.body.name) myfriend[index].name = req.body.name;
    if (req.body.email) myfriend[index].email = req.body.email;
    if (req.body.phone) myfriend[index].phone = req.body.phone;

    return res.json({ message: "Friend data is updated successfully", friend: myfriend[index] });
});

app.put('/api/myfriend/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= myfriend.length) {
        return res.status(404).json({ message: 'No friend at this index exists' });
    }

   let friend = {
    ...myfriend[index],
    ...req.body
   }
   myfriend[index] = friend;

    return res.json({ message: "Friend data is updated successfully", friend: myfriend[index] });
});

app.delete('/api/myfriend/:index', (req, res) => {
    const index = parseInt(req.params.index);

    if (index < 0 || index >= myfriend.length) {
        return res.status(404).json({ message: 'No friend at this index exists' });
    }

    myfriend.splice(index, 1);

    return res.json({ message: 'Friend is deleted successfully' });
});
// Delete all friends
app.delete('/api/myfriend', (req, res) => {
    myfriend.splice(0, myfriend.length);
    return res.json({ message: 'All friends are deleted successfully' });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
