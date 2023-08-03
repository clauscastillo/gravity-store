const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const User = require("../models/users.model");

mongoose
  .connect("mongodb://127.0.0.1:27017/gravity", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Established a connection to the database");
    User.findOne({ admin: true }).then((res) => {
      if (res == null) {
        User.create({
          admin: true,
          name: "admin",
          password: "5265245123",
        }).then(console.log("Admin creado"));
      } else {
        console.log("Admin existente");
      }
    });
  })
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );