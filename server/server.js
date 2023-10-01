// Basicos del servidor
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();

// Iniciar server

app.listen(port, () => {
  console.log("Server run at port " + port);
});

app.use((req, res, next) => {
  // Permite las solicitudes desde todos los orígenes (esto debe ajustarse según tus necesidades)
  res.header("Access-Control-Allow-Origin", "*");
  // Habilita las cookies en las solicitudes cruzadas
  res.header("Access-Control-Allow-Credentials", "true");
  // Define los métodos HTTP permitidos (ejemplo: GET, POST, etc.)
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  // Define los encabezados permitidos
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Configuracion para peticiones cruzadas y lectura de POST
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rutas públicas (sin autenticación)
// app.post("/api/login", (req, res) => {
//   // Aquí verificarías las credenciales del usuario
//   const { email, password } = req.body;

//   // Si las credenciales son válidas, genera un token JWT
//   if (email === "admin@local.local" && password === "123456") {
//     const token = jwt.sign({ email }, "secreto", { expiresIn: "1h" });
//     res.cookie("jwt", { token }, { httpOnly: true });
//     res.json("Cookie enviada");
//   } else {
//     res.status(401).json({ message: "Credenciales incorrectas" });
//   }
// });

// Middleware de autenticación
// function authenticateToken(req, res, next) {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Acceso no autorizado" });

//   jwt.verify(token, "secreto", (err, user) => {
//     if (err) return res.status(403).json({ message: "Token no válido" });
//     req.user = user;
//     next();
//   });
// }

// Rutas protegidas (requieren autenticación)
// app.get("/productos", authenticateToken, (req, res) => {
//   // Aquí puedes realizar operaciones relacionadas con los productos
//   res.json({ message: "Lista de productos" });
// });

// Configuracion de mongoose

// require("./config/mongoose.config");

// Rutas

const ProductRoutes = require("./routes/product.routes");
ProductRoutes(app);

const UserRoutes = require("./routes/user.routes");
UserRoutes(app);
