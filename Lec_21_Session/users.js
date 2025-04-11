const bcrypt = require('bcrypt');

const users = [
    {
        id: 1,
        email: 'abc@abc.com',
        password: bcrypt.hashSync('password', 10)
    }
]; 

module.exports = users;