const Product = require("../models/product.model");
const User = require("../models/users.model");
const getProducts = (req, res) => {
  Product.find().then((response) => res.json(response));
};

const getOneProduct = (req, res) => {
  Product.findById(req.params.id).then((response) => res.json(response));
};

const addProduct = (req, res) => {
  Product.create(req.body)
    .then((response) => {
      res.json("Producto agregado");
    })
    .catch((err) => res.json(err));
};

const editProduct = (req, res) => {};

const deleteProduct = (req, res) => {
  Product.findByIdAndDelete(req.params.id).then(() => res.json("Eliminado"));
};

const product = {
  getProducts,
  getOneProduct,
  addProduct,
  editProduct,
  deleteProduct,
};

module.exports = product;
