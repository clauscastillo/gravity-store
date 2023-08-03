const Product = require("../models/product.model");
const User = require("../models/users.model");

async function product(req, res) {
  const { method, body, params } = req;
  params.id && console.log(params);

  switch (method) {
    case "GET":
      if (params.id) {
        const products = await Product.findById(params.id);
        res.json(products);
      } else {
        const products = await Product.find();
        res.json(products);
      }
      break;
    case "POST":
      const product = await Product.create(body);
      res.json(product);
      break;
    default:
      res.json({ error: "Invalid method" });
      break;
  }
}

module.exports = product;
