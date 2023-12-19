const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  amount: Number,
  // colors: ["red", "green", "blue"],
});

module.exports = mongoose.model("product", productSchema);
