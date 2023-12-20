const mongoose = require("mongoose");


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  amount: Number,
  colors: {
    type: String,
    enum: ["red", "green", "blue"],
    // you can set a default value
    default: "red",
  },
});

module.exports = mongoose.model("product", productSchema);
