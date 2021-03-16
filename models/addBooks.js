const mongoose = require('mongoose');
const book = require('../models/books');

const dbname = "library";         // databasen hedder library
const findDB = `mongodb://localhost:27017/${dbname}`;
const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.connect(findDB, conparam);
const db = mongoose.connection;
db.once("open", function() {
    console.log("Connected to server by mongoose");
});

Book.create(
    {
        title: "Test book",
        authors: "an author name",
        copyright: "The author",
        edition: 1,

    },
    function(error, savedDocument) {
        if (error) console.log(error);
        console.log(savedDocument);

        db.close();     // if forgotten batch job doesn't stop by itself

    }
);