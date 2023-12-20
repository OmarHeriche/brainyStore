require("dotenv").config();
const connectDB = require("./db/connect");
const product = require("./modules/product");
const products_json = require("./product.json");

const start = async () => {
  try {
    await connectDB(process.env.connection_string);
    await product.deleteMany();
    await product.create(products_json);
    console.log("fullfield");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
start();
// console.log("hello")
