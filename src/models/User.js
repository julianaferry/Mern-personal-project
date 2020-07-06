const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String,
    email: String
})

MediaList.export = mongoose.models('User', UserSchema)