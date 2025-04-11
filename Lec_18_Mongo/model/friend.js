const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number 
});

module.exports = mongoose.model('Friend', friendSchema);
