const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("gravity", "root", "123456", {
  host: "localhost",
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const Producto = sequelize.define(
  "Producto",
  {
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
  },
  {
    timestamps: false, // Deshabilita las columnas createdAt y updatedAt
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Modelo y tabla de Producto sincronizados correctamente");
  })
  .catch((error) => {
    console.error("Error al sincronizar el modelo de Producto:", error);
  });

// Consulta todos los productos
Producto.findAll()
  .then((productos) => {
    productos.forEach((producto) => {
      console.log(producto.dataValues);
    });
  })
  .catch((error) => {
    console.error("Error al consultar productos:", error);
  });
