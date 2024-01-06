const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    email: {
        type: "String",
        unique: true
    },
    age: {
        type: "Number"
    }
});

const User = mongoose.model('NewUsers', userSchema);

module.exports = User;