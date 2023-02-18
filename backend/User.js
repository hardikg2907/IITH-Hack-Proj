const mongoose = require('mongoose')
mongoose.set('strictQuery', false);
const { Schema } = mongoose;
var User = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    username: {
        type: String
    },
    password: {
        type: String
    }
})

module.exports = mongoose.model('User', User)