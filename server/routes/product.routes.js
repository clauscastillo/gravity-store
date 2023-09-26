const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Directorio de destino para archivos
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Nombre de archivo
  },
});
const upload = multer({ storage: storage });
const product = require("../controllers/product.controller");

module.exports = (app) => {
  app.get("/api/products", product.getProducts);

  app.get("/api/product/:id", product.getOneProduct);

  app.post("/api/products", upload.single("image"), (req, res) => {
    res.json("producto agregado");
  });

  app.put("/api/products", product.editProduct);

  app.delete("/api/product/:id", product.deleteProduct);
};
