const mongoose = require('mongoose');

const bookcopySchema = mongoose.Schema ({
    bookid: {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}
});

module.exports = mongoose.model("Bookcopy", bookcopySchema, 'bookcopies'); // 1. parameter er modulets navn, 2. parameter er schema og 3. parameter er kollektionsnavn(books collection fra databasen)