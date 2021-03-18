const mongoose = require('mongoose');

const personsSchema = mongoose.Schema({
    cpr: {
        type: String,
        unique: true
    },
    currentpenalties: Number,
    email: {
        type: String,
        unique: true
    },
    firstname: String,
    lastname: String,
    middlename: String,
    newsletter: Boolean,
    password: String
})

module.exports = mongoose.model("Person", personsSchema, 'persons');    // 1. parameter er modulets navn, 2. parameter er schema og 3. parameter er kollektionsnavn(books collection fra databasen)