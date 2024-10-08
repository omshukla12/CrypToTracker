const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = dbConnection;
