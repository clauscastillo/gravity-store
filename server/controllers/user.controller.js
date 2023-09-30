const User = require("../models/users.model");
const jwt = require("jsonwebtoken");
const KEY_JWT = process.env.KEY_JWT;
const bcrypt = require("bcrypt");

module.exports = {
  getUser: async (req, res) => {
    // const token = req.headers.user;
    // const user = jwt.verify(token, SECRET);
    // User.findById(user._id).then((response) => {
    //   res.json(response);
    // });
    const user = await User.findAll();
    res.json(user);
  },

  registerUser: async (req, res) => {
    try {
      console.log(console.log(req.body));
      bcrypt.hash(req.body.password, 10, async (err, hash) => {
        if (err) {
          res
            .status(500)
            .json({
              error: "Hubo un error con el encriptado de la contraseña",
            });
        } else {
          const user = await User.create({
            name: req.body.name,
            password: hash,
            phone: req.body.phone,
            email: req.body.email,
          });
          res.status(200).json(user);
        }
      });
    } catch (error) {
      res.status(404).json(error);
    }
  },

  loginUser: async (req, res) => {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Correo electrónico o contraseña incorrectos" });
    }
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) {
      return res
        .status(400)
        .json({ error: "Correo electrónico o contraseña incorrectos" });
    }
    const userToken = jwt.sign({ id: user.id }, KEY_JWT);
    res
      .status(200)
      .cookie("auth", userToken, { maxAge: 10000 })
      .json("Sesión iniciada correctamente");
  },
};
