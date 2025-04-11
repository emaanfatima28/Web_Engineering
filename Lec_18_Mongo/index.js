const mongoose = require('mongoose');
const Friend = require('./model/friend');
const color = require('colors');


mongoose.connect('mongodb://localhost:27017/myfriends')
    .then(() => console.log('Database is Connected'))
    .catch(err => console.log(err));

async function recordFriendDocuments() {
    try {
        await Friend.deleteMany({});

        const friends = [
            { name: 'Hashim', email: 'hashim@gmail.com', age: 50 },
            { name: 'Faizan', email: 'faizan@gmail.com', age: 30 },
            { name: 'Faizan', email: 'faizii@gmail.com', age: 28 },
            { name: 'Rana', email: 'rana@gmail.com', age: 47 }
        ];

        await Friend.insertMany(friends);
        console.log('Friends inserted successfully');

        const beforeUpdate = await Friend.find({ age: { $gt: 45 } });
        console.log('Before Update:', beforeUpdate);

        const updateResult = await Friend.updateMany(
            { age: { $gt: 45 } }, 
            { $set: { email: 'updated@gmail.com' } }
        );

        const afterUpdate = await Friend.find({ age: { $gt: 45 } });        

    } catch (err) {
        console.error(err);
    }
}
async function updateSpecificFriend() {
    try {
        const updateResult = await Friend.updateOne(
            { $and: [{ age: 45 }, { email: 'updated@gmail.com' }, { name: 'Hashim' }] },
            { $set: { name: 'Emaan' } }
        );
        const updatedFriend = await Friend.find({ email: 'updated@gmail.com', age: 45 });
    } catch (err) {
        console.error(err);
    }
}

updateSpecificFriend();
