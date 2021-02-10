const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/productCart", productsController.productCart);

router.get("/productDetail", productsController.productDetail);

//Rutas para crear un nuevo producto:
router.get("/newProduct", productsController.newProduct);

router.post("/newProduct", productsController.saveProduct);


//Rutas para guardar actualizar un producto:
router.get("/updateProduct", productsController.updateProduct);



module.exports = router;
