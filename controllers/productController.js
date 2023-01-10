const Product = require("../model/Product");

//get all products
const product_all = async (req, res) => {
  try {
    const product = await Product.find();
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};
//get single products
const product_details = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};
//add new products
const product_create = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    detail: req.body.detail,
  });
  try {
    const saveProduct = await product.save();
    res.send(saveProduct);
  } catch (error) {
    res.status(400), send(error);
  }
};
//update product
const product_update = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    detail: req.body.detail,
  });
  try {
    const updateProduct = await product.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.send(updateProduct);
  } catch (error) {
    res.json({ message: error });
  }
};
//delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_all,
  product_create,
  product_delete,
  product_details,
  product_update,
};
