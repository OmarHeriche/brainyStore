const express = require("express");
const{
  getAllProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
}=require('../controllers/products');
const router = express.Router();

router.route("/").get(getAllProducts).post(createProduct);//! there is mix between user (only get) & admin(get and post);
router.route("/:id").get(getSingleProduct).delete(deleteProduct).patch(updateProduct);//! there is mix between user (only get) & admin(get delete patch);
module.exports = router;
