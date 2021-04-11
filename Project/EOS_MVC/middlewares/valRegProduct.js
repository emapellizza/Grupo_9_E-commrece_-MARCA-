
const { body } = require("express-validator");

  //Validaciones del formulario de producto nuevo
  const validateProduct= [
    body("marca").notEmpty().withMessage("* Debes seleccionar una Marca"),
    body("modelo").notEmpty().withMessage("* Debes ingresar un modelo"),
    body("precio").notEmpty().withMessage("* Debes ingresar un precio"),
    body("categoria").notEmpty().withMessage("* Debes seleccionar una categoria"),
    body("genero").notEmpty().withMessage("* Debes seleccionar un genero"),
    body("shortDescription")
      .notEmpty()
      .withMessage("* Debes agregar una breve descripcion"),
    body("longDescription")
      .notEmpty()
      .withMessage("* Debes agregar una descripcion"),
    body("talles").notEmpty().withMessage("* Debes seleccionar los talles"),
    body("colores").notEmpty().withMessage("* Debes seleccionar los colores"),
  ];
  
  module.exports = validateProduct;