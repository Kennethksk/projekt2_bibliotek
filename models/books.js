const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    title: String,
    authors: [],
    copyright: String,
    edition: Number,
    published: {
        publisher: String,
        place: String,
        year: Number
    }
})

module.exports = mongoose.model("Book", booksSchema, 'books');    // 1. parameter er modulets navn, 2. parameter er schema og 3. parameter er kollektionsnavn(books collection fra databasen)