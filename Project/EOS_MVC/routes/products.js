const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// Listado de productos
router.get("/products", productsController.products);

// Carrito
router.get("/productCart", productsController.productCart);

// Detalle de producto
router.get("/productDetail", productsController.productDetail);

// Crear un nuevo producto:
router.get("/newProduct", productsController.newProduct);
router.post("/newProduct", productsController.saveProduct);

//R utas para guardar actualizar un producto:
router.get("/updateProduct", productsController.updateProduct);
router.get("/updateProduct/:idProduct", productsController.productToUpdate);

// Aca va la ruta a una nueva pagina "producto a actualizar" o algo asi

module.exports = router;
