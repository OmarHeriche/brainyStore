const product = require("../modules/product");

const getAllProducts = async (req, res) => {
  try {
    const products = await product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ msj: error });
  }
};
const createProduct = async (req, res) => {
  try {
    const myProduct = await product.create(req.body);
    res.status(201).json({ myProduct });
  } catch (error) {
    res.status(500).json({ msj: error });
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const targeted_product = await product.findOne({ _id: productId });
    if (!targeted_product) {
      return res.status(404).json({ msj: `no product with id = ${productId}` });
    }
    res.status(200).json({ product: targeted_product });
  } catch (error) {
    res.status(500).json({ msj: error });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const { id: productId } = req.params;
    const targeted_product = await product.findOneAndDelete({ _id: productId });
    if (!targeted_product) {
      return res.status(404).json({ msj: `no product with id = ${productId}` });
    }
    res.status(200).json({ product: targeted_product });
  } catch (error) {
    res.status(500).json({ msj: error });
  }
};
const updateProduct = async (req, res) => {
  try {
    const {id: productId}=req.params;
    const targeted_product = await product.findOneAndUpdate({_id:productId},req.body,{
      new: true,
      runValidators: true,
    })
    if (!targeted_product) {
      return res.status(404).json({ msj: `no product with id = ${productId}` });
    }
    res.status(200).json({id:productId, product: targeted_product });
  } catch (error) {
    res.status(500).json({ msj: error });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
