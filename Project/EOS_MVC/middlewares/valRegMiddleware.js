//Validaciones del formulario de Registro

const { body } = require("express-validator");
const validateUser = [
    body("firstName").notEmpty().withMessage("* Debes completar el nombre"),
    body("lastName").notEmpty().withMessage("* Debes completar el apellido"),
    body("dateOfBirth").isDate().withMessage("* Debes ingresar una fecha válida"),
    body("email")
      .isEmail().withMessage("* Debes completar el Email con una dirección válida"),
    body("password")
      .notEmpty().withMessage(" Debes completar la contraseña").bail()
      .isLength({ min: 6, max: 16 }).withMessage("* La contraseña debe tener entre 6 y 16 caracteres"),
    
  ];

  module.exports = validateUser;
