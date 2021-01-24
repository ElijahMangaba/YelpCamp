const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// this line adds in username and password properties to our schema
// makes sure username and passwords are unique
// also includes other helpful methods 
UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);