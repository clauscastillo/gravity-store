const product = (sequelize) => {
  const { DataTypes } = require("sequelize");

  // Define el modelo Producto
  const Producto = sequelize.define("Producto", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img2: {
      type: DataTypes.STRING,
      allowNull: true, // Puede ser nulo si no hay una segunda imagen
    },
  });

  // Sincroniza el modelo con la base de datos (esto crea la tabla si no existe)
  sequelize
    .sync()
    .then(() => {
      console.log("Modelo y tabla de Producto sincronizados correctamente");
    })
    .catch((error) => {
      console.error("Error al sincronizar el modelo de Producto:", error);
    });

  // Exporta el modelo para su uso en otras partes de tu aplicación
  module.exports = { Producto };
};
