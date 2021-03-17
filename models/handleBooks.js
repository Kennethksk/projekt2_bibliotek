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
    
} 