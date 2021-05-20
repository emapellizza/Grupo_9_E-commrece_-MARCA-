const express = require("express");
const router = express.Router();

const dbProductController = require("../controllers/dbControllers/dbProductController");

// Listado de productos
router.get("/", dbProductController.listAll);

// Carrito
router.get("/cart", dbProductController.cart);


// Detalle de producto
router.get("/detail/:idProduct", dbProductController.show);

// Agregar producto al Carrito
router.post("/detail/", dbProductController.productToCart);


module.exports = router;
