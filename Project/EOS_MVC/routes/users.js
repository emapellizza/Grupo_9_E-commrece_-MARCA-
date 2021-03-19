const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const multer = require("multer");
const path = require("path");
const usersController = require("../controllers/usersController");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/users"));
  },
  filename: (req, file, cb) => {
    const fileName = "user-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const uploadUser = multer({ storage });

//Validaciones del formulario de Registro
const validateRegister = [
  body("firstName").notEmpty().withMessage("Debes completar el nombre"),
  body("lastName").notEmpty().withMessage("Debes completar el apellido"),
  body("email")
    .isEmail()
    .withMessage("Debes completar el Email con una dirección válida"),
  body("password")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Debes completar un password de al menos seis caracteres"),
  body("confirmPassword")
    .notEmpty()
    .isLength({ min: 6 })
    .withMessage("Debes completar un password de al menos seis caracteres"),
];

router.get("/login", usersController.login);

router.get("/register", usersController.register);
router.post(
  "/register",
  uploadUser.single("imagenUsuario"),
  validateRegister,
  usersController.store
);

router.get("/userCreated", usersController.userCreated);

module.exports = router;
