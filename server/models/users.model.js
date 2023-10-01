const { DataTypes } = require("sequelize");
const sequelize = require("../config/sequelize.config");

const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: Number,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    collaborator: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
    },
  },
  { timestamps: false }
);

// UserSchema.methods.generateAuthToken = function() {
//   const token = jwt.sign({_id: this._id}, process.env.KEYJWT, {expiresIn:"7d"})
//   return token
// }

// sequelize
//   .sync()
//   .then(() => {
//     console.log("Modelo y tabla de Producto sincronizados correctamente");
//   })
//   .catch((error) => {
//     console.error("Error al sincronizar el modelo de User:", error);
//   });

module.exports = User;
