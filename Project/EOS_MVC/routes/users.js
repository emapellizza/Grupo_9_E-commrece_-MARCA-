const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadUser = require("../middlewares/multerMiddleware");
const validateRegister = require("../middlewares/valRegMiddleware");

// Registro
router.get("/register", guestMiddleware, usersController.register);
router.post("/register",uploadUser.single("imagenUsuario"),validateRegister,usersController.saveUser);

// Logeo
router.get("/login", guestMiddleware, loginController.login);
router.post("/login", loginController.loginProcess);
router.get("/logout", loginController.logout);

// Perfil
router.get("/profile", authMiddleware, usersController.profile);

//Detalle de usuario buscado
router.get("/detail/:idUser", usersController.findById);
module.exports = router;
