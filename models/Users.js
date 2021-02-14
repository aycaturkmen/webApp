const mongoose = require('mongoose');

//Veritabanı şablonu oluşturma
const UsersSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        format: Date
    },
    position: {
        type: String,
        required: false
    },
    projects: {
        type: String,
    },
    Date: {
        type: Date,
        required: true,
        default: Date.now
    },
});

module.exports = mongoose.model('Users', UsersSchema);