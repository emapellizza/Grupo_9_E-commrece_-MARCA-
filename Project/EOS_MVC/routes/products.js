const express = require("express");
const router = express.Router();


const productsController = require("../controllers/productsController");
const validateRegister = require("../middlewares/valRegProduct")
const uploadProduct = require("../middlewares/multerMiddProduct");

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
