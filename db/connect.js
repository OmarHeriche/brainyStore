const mongoose = require("mongoose");

const connectDB = (connection_string) => {
  mongoose.connect(connection_string);
  console.log("connected to the db...")
};
module.exports = connectDB;