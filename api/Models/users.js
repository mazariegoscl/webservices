var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = mongoose.Schema({
    name: String,
    surname: String,
    phone: String,
    email: String,
    password: String,
    status: Number,
    type: Number,
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Users', userSchema);
