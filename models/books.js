const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
    title: String,
    authors: [{
        firstname: String,
        middlename: String,
        lastname: String,
    }],
    copyright: String,
    edition: Number,
    published: {
        publisher: String,
        place: String,
        year: Number
    }
})

const book = mongoose.model("Book", booksSchema, 'book');

exports.book = book;