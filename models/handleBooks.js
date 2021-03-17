const mongoose = require('mongoose');
const book = require('../models/books');

exports.getBooks = async function(query, sort) {
    const dbname = "library";         // databasen hedder library
    const findDB = `mongodb://localhost:27017/${dbname}`;
    const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(findDB, conparam);
    const db = mongoose.connection;
    db.once("open", function() {
    console.log("Connected to server by mongoose");
    });
    let result = await book.find(query, null, sort);
    return result;
};

exports.putBooks = async function(req) {
    const dbname = "library";         // databasen hedder library
    const findDB = `mongodb://localhost:27017/${dbname}`;
    const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(findDB, conparam);
    const db = mongoose.connection;
    db.once("open", function() {
    console.log("Connected to server by mongoose");
    });

    let author = {
        firstname: req.body.authorFname,
        middlename: req.body.authorMname,
        lastname: req.body.authorLname
    };

    let published = {
        publisher: req.body.publisher,
        place: req.body.place,
        year: req.body.year
    };

    let book = new Book({
        title: req.body.title,
        authors: [author],
        copyright: req.body.copyright,
        edition: req.body.edition,
        published: published
    });

    Book.create(book, function(error, savedDocument) {
        if (error)
            console.log(error);
        let i = req.body.copies;
        let arr = [];
        while (i > 0) {
            let bookcopy = new Bookcopy({
                bookid: savedDocument._id
            });
            arr.push(bookcopy);
            --i;
        }
        console.log(arr.length);

        Bookcopy.create(arr, function(err, cops) {
            if (err)
                console.log(err);
            console.log(cops);
            db.close();
        });
    });
} 