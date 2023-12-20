//!         requiring section: start
const express = require("express");
const connectDB = require("./db/connect");
const router=require('./routes/products');
const notFound=require('./middleWears/not-found')
const error_handler=require('./middleWears/handle_error')
require("dotenv").config();
//!         requiring section: end

const app = express();//!           MY SERVER.

//!         middlewares section: start
app.use(express.json());
app.use('/api/v1/products',router);
app.use(notFound)
app.use(error_handler)
//!         middlewares section: end
app.get("/",(req,res)=>{
    res.send("hello world")
})
const port = process.env.port || 5000;

const start = async () => {
  try {
    await connectDB(process.env.connection_string);
    app.listen(port, () => {
      console.log(`server is listening to ${port} port...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
