const mongoose = require('mongoose');

const personsSchema = mongoose.Schema({
    cpr: String,
    currentpenalties: Number,
    email: String,
    firstname: String,
    lastname: String,
    middlename: String,
    newsletter: Boolean,
    password: String
})

module.exports = mongoose.model("Persons", personsSchema, 'persons');    // 1. parameter er modulets navn, 2. parameter er schema og 3. parameter er kollektionsnavn(books collection fra databasen)