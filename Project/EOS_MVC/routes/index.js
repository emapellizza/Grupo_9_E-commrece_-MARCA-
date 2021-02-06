const express = require("express");
const router = express.Router();
const mainController = require("../controllers/mainController");

router.get("/", mainController.index);

router.get("/login", mainController.login);

router.get("/productCart", mainController.productCart);

router.get("/productDetail", mainController.productDetail);

router.get("/register", mainController.register);

// Solo para ver el form newProduct
router.get("/newProduct", mainController.newProduct);

module.exports = router;
