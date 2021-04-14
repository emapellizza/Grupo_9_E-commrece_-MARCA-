const express = require("express");
const router = express.Router();

const productsController = require("../controllers/productsController");

// Listado de productos
router.get("/", productsController.listAll);

// Carrito
router.get("/cart", productsController.productCart);

// Detalle de producto
router.get("/detail/:idProduct", productsController.show);


module.exports = router;
