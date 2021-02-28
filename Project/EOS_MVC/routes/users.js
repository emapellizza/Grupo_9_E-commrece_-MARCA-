const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const usersController = require("../controllers/usersController");

//Validaciones

const validateRegister = [
    body("firstName").notEmpty().withMessage("Debes completar el nombre"),
    body("lastName").notEmpty().withMessage("Debes completar el apellido"),
    body("email").isEmail().withMessage("Debes completar el Email con una dirección válida"),
    body("password").notEmpty().isLength({min: 6}).withMessage("Debes completar un password de al menos seis caracteres"),
    body("password2").notEmpty().isLength({min: 6}).withMessage("Debes completar un password de al menos seis caracteres")
]



router.get("/login", usersController.login);

router.get("/register", usersController.register);
router.post("/register", validateRegister, usersController.create);
router.get("/userRegistered", usersController.userRegistered);


module.exports = router;
