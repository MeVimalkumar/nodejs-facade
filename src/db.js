const mongoose = require("mongoose");
const options = { useNewUrlParser: true, useUnifiedTopology: true };

function dbConnection() {
    mongoose.connect('mongodb://localhost:27017/nodejs-facade', options);

    const db = mongoose.connection;

    db.on("error", error => {
        console.error("connection error", error);
    });
    db.on("open", () => {
        console.log("connection established");
    });
}

module.exports = { dbConnection };