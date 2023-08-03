const product = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", product);

  app.get("/api/products/:id", product);

  app.post("/api/products", product);

  app.put("/api/products", product);

  app.delete("/api/products", product);
};
