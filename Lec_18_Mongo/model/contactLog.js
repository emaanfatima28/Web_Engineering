const mongoose = require('mongoose');
const validator = require('validator');

const friendContactHistorySchema = new mongoose.Schema({
    contactDate : {
        type: Date,
        default : Date.now
    },
    contactMessage : {
        type: String,
        required : true
    }});

const contactLog = mongoose.model('contactLog', friendContactHistorySchema);
module.exports = contactLog;    