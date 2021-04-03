const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const multer = require("multer");
const path = require("path");
const productsController = require("../controllers/productsController");

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    const fileName = "product-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});

const uploadProduct = multer({ storage });

//Validaciones del formulario de Registro
const validateRegister = [
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

// Listado de productos
router.get("/", productsController.listAll);

// Carrito
router.get("/cart", productsController.productCart);

// Detalle de producto
router.get("/detail/:idProduct", productsController.show);

// Crear un nuevo producto:
router.get("/new", productsController.newProduct);
router.post("/new",uploadProduct.single("imagenProducto"),validateRegister,productsController.saveProduct);

//Rutas para actualizar un producto:
router.get("/:idProduct", productsController.show);

// Aca va la ruta a una nueva pagina "producto a actualizar" o algo asi

module.exports = router;
