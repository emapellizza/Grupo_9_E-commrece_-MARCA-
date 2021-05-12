const express = require("express");
const router = express.Router();

const usersController = require("../controllers/jsonsControllers/usersController");
const dbUserController = require("../controllers/dbControllers/dbUserController");
const loginController = require("../controllers/jsonsControllers/loginController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadUser = require("../middlewares/multerMiddleware");
const validateRegister = require("../middlewares/valRegMiddleware");
const mainController = require("../controllers/jsonsControllers/mainController");

router.get("/", mainController.index);

// Registro
router.get("/register", guestMiddleware, dbUserController.register);
router.post("/register", validateRegister, uploadUser.single("userImage"), dbUserController.saveUser);

// Logeo
router.get("/login", guestMiddleware, loginController.login);
router.post("/login", loginController.loginProcess);
router.get("/logout", loginController.logout);

// Perfil
router.get("/profile", authMiddleware, usersController.profile);

//Detalle de usuario buscado
router.get("/detail/:idUser", dbUserController.findById);

module.exports = router;
