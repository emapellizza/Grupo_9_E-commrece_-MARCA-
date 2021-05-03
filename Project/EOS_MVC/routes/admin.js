const express = require("express");
const router = express.Router();

const validateRegister = require("../middlewares/valRegProduct");
const uploadProduct = require("../middlewares/multerMiddProduct");
const dbUserController = require("../controllers/dbControllers/dbUserController");
const productsController = require("../controllers/jsonsControllers/productsController");
const dbProductController = require("../controllers/dbControllers/dbProductController");
const usersController = require("../controllers/jsonsControllers/usersController");
const loginController = require("../controllers/jsonsControllers/loginController");
const adminController = require("../controllers/jsonsControllers/adminController");
//para la session
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require("../middlewares/authMiddleware");

//vista administrador
router.get("/", adminController.view);

////////////rutas de productos//////////
//Detalle de producto
router.get("/products/detail/:idProduct", dbProductController.show);

//cear un nuevo producto:
router.get("/products/new", dbProductController.newProduct);
router.post(
  "/products/new",
  uploadProduct.single("productImage"),
  validateRegister,
  dbProductController.saveProduct
);

//Rutas para actualizar un producto:
router.get("/products/edit/:idProduct", productsController.updateProduct);
router.put("/products/edit/:idProduct", uploadProduct.single("productImage"),
 productsController.updatedProduct);

//borrar un producto
router.delete("/products/delete/:idProduct", productsController.delete);

//lista productos
router.get("/products", dbProductController.listAll);

///////rutas usuarios///////
//detalle usuario
router.get("/profile", authMiddleware, usersController.profile);
///update usuario
router.get("/users/edit/:idUser", usersController.updateUser);
router.put("/users/edit/:idUser", usersController.updateUser);
//borrar usuario
router.delete("/users/delete/:idUser", usersController.delete);
//lista usuarios
router.get("/users", dbUserController.listAll); //admin/users

module.exports = router;
