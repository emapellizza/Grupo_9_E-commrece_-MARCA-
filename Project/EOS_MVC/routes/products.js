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
  body("marcaProducto").notEmpty().withMessage("Debes seleccionar una Marca"),
  body("modeloProducto").notEmpty().withMessage("Debes ingresar un modelo"),
  body("precioProducto").notEmpty().withMessage("Debes ingresar un precio"),
  body("categoriaProducto")
    .notEmpty()
    .withMessage("Debes ingresar seleccionar una categoria"),
  body("generoProducto").notEmpty().withMessage("Debes seleccionar un genero"),
  body("shortDescripcion")
    .notEmpty()
    .withMessage("Debes agregar una breve descripcion"),
  body("longDescripcion")
    .notEmpty()
    .withMessage("Debes agregar una descripcion"),
  body("tallesProducto").notEmpty().withMessage("Debes seleccionar los talles"),
  body("coloresProducto")
    .notEmpty()
    .withMessage("Debes seleccionar los colores"),
];

// Listado de productos
router.get("/", productsController.listAll);

// Carrito
router.get("/cart", productsController.productCart);

// Detalle de producto
router.get("/detail/:idProduct", productsController.show);

// Crear un nuevo producto:
router.get("/new", productsController.newProduct);
router.post(
  "/new",
  uploadProduct.single("imagenProducto"),
  validateRegister,
  productsController.saveProduct
);

//Rutas para actualizar un producto:
router.get("/:idProduct", productsController.show);

// Aca va la ruta a una nueva pagina "producto a actualizar" o algo asi

module.exports = router;
