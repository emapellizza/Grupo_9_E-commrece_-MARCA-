const express = require("express");
const router = express.Router();

const usersController = require("../controllers/jsonsControllers/usersController");
const loginController = require("../controllers/jsonsControllers/loginController");
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");
const validateRegister = require("../middlewares/valRegMiddleware");
const mainController = require("../controllers/jsonsControllers/mainController");
const uploadUser = require("../middlewares/multerMiddleware");

router.get("/", mainController.index);

// Registro
router.get("/register", guestMiddleware, usersController.register);
router.post("/register", validateRegister, uploadUser.single("userImage"), usersController.saveUser);

// Logeo
router.get("/login", guestMiddleware, loginController.login);
router.post("/login", loginController.loginProcess);
router.get("/logout", loginController.logout);

// Perfil
router.get("/profile", authMiddleware, usersController.profile);

//Detalle de usuario buscado
router.get("/detail/:idUser", usersController.findById);

//Actualizar cuenta
router.get("/edit/:idUser", usersController.updateUser);
router.put("/edit/:idUser",usersController.updatedUser);

  //Recordar contraseña
  router.get("/password", usersController.password);
  router.post("/password", usersController.passwordCheck);

  //Mis compras
  router.get("/history", usersController.history);

  //Favoritos
  router.get("/favs", usersController.favs);


module.exports = router;
