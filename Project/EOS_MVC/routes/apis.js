const express = require("express");
const router = express.Router();

const apiUsers = require("../controllers/apiControllers/apiUsers");
const apiProducts = require("../controllers/apiControllers/apiProducts");

//Usuarios
router.get("/users/", apiUsers.show);
router.get("/users/:id", apiUsers.showId);

//Productos
router.get("/products/", apiProducts.products);
router.get("/products/:id", apiProducts.showId);

module.exports = router;
