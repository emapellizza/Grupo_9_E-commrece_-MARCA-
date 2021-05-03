const express = require("express");
const router = express.Router();

const dbProductController = require("../controllers/dbControllers/dbProductController");

// Listado de productos
router.get("/", dbProductController.listAll);

// Carrito
router.get("/cart", dbProductController.productCart);

// Detalle de producto
router.get("/detail/:idProduct", dbProductController.show);


module.exports = router;
