const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  host: "database-1.cxfqvjlozrcw.sa-east-1.rds.amazonaws.com", // Reemplaza con el endpoint de tu instancia RDS
  dialect: "mysql",
  username: "admin", // Reemplaza con tu nombre de usuario de RDS
  password: "HY8AdW7KJEHv7995Ub2Hm68qEFv", // Reemplaza con tu contraseña de RDS
  database: "gravity", // Reemplaza con el nombre de tu base de datos
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
  })
  .catch((error) => {
    console.error("Error en la conexión a la base de datos:", error);
  });

module.exports = sequelize;
