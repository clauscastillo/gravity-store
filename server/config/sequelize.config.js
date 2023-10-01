const { Sequelize } = require("sequelize");

// Configura la instancia de Sequelize
const sequelize = new Sequelize({
  host: "database-1.cxfqvjlozrcw.sa-east-1.rds.amazonaws.com", // Reemplaza con el endpoint de tu instancia RDS
  dialect: "mysql",
  username: "admin", // Reemplaza con tu nombre de usuario de RDS
  password: "6F3zLLXYRncEW8vUHW555tffnt7", // Reemplaza con tu contraseña de RDS
  database: "gravity", // Reemplaza con el nombre de tu base de datos
});

// Prueba la conexión
sequelize
  .authenticate()
  .then(() => {
    console.log("Conexión a la base de datos exitosa.");
  })
  .catch((error) => {
    console.error("Error en la conexión a la base de datos:", error);
  });

// Define tus modelos y realiza otras operaciones de Sequelize aquí.
