const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image_link: {
    type: String, //! it need to be required;
  },
  description: {
    type: String,
    default: "enter the description of this product",
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
  size: {
    type: String,
    enum: ["M", "S", "L", "XL"],
    default: "M",
  },
  likes: {
    type: Number,
    default: 0,
  },
  category: {
    type: String,
    enum: ["man", "child", "woman", "all"],
    default: "all",
  },
});

module.exports = mongoose.model("product", productSchema);
