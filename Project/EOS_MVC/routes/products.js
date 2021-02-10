const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/productCart", productsController.productCart);

router.get("/productDetail", productsController.productDetail);

//Rutas para crear un nuevo producto:
router.get("/newProduct", productsController.newProduct);

router.post("/newProduct", productsController.saveProduct);


//Rutas para guardar actualizar un producto:
router.get("/updateProduct/:idProduct", productsController.updateProduct);

    // Aca va la ruta a una nueva pagina "producto a actualizar" o algo asi

module.exports = router;
