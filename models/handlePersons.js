const mongoose = require('mongoose');
const Person = require('../models/persons');

exports.getPersons = async function(query, sort) {
    const dbname = "library";         // databasen hedder library
    const findDB = `mongodb://localhost:27017/${dbname}`;
    const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(findDB, conparam);
    const db = mongoose.connection;
    db.once("open", function() {
    console.log("Connected to server by mongoose");
    });
    let result = await Person.find(query, null, sort);
    return result;
};

exports.putPersons = async function(req) {
    const dbname = "library";         // databasen hedder library
    const findDB = `mongodb://localhost:27017/${dbname}`;
    const conparam = { useNewUrlParser: true, useUnifiedTopology: true };
    await mongoose.connect(findDB, conparam);
    const db = mongoose.connection;
    db.once("open", function() {
    console.log("Connected to server by mongoose");
    });

    let person = new Person({
        cpr: req.body.cpr,
        currentpenalties: req.body.currentpenalties,
        email: req.body.email,
        loanerFname: req.body.loanerFname,
        loanerLname: req.body.loanerLname,
        loanerMname: req.body.loanerMname,
        newsletter: req.body.newsletter,
        password: req.body.password
    });

    Person.create(person, function(error, savedDocument) {
        if (error) 
            console.log(error);
        console.log(savedDocument);

        db.close(); 

        
    });
} 