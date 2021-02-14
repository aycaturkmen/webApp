const mongoose = require('mongoose');

//Veritabanı şablonu oluşturma
const ProjectsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    dueDate: {
        type: String,
        required: false,
        format: Date
    },
    people: {
        type: String,
        required: false
    },
});

module.exports = mongoose.model('Projects', ProjectsSchema);