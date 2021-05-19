const express = require("express");
const router = express.Router();

const validateRegister = require("../middlewares/valRegProduct");
const uploadProduct = require("../middlewares/multerMiddProduct");
const uploadUser = require("../middlewares/multerMiddProduct");
const dbProductController = require("../controllers/dbControllers/dbProductController");
const usersController = require("../controllers/jsonsControllers/usersController");
const adminController = require("../controllers/jsonsControllers/adminController");

//para la session
const authMiddleware = require("../middlewares/authMiddleware");

//vista administrador
router.get("/", adminController.view);

////////////rutas de productos//////////

//lista productos
router.get("/products", dbProductController.listAll);
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
router.get("/products/edit/:idProduct", dbProductController.updateProduct);
router.put(
  "/products/edit/:idProduct",
  uploadProduct.single("productImage"),
  dbProductController.updatedProduct
);

//borrar un producto
router.delete("/products/delete/:idProduct", dbProductController.delete);

//lista productos
router.get("/products", dbProductController.listAll);

///////rutas usuarios///////

//lista usuarios
router.get("/users", usersController.listAll);

//detalle usuario
router.get("/profile", authMiddleware, usersController.profile);
router.get("/users/detail/:idUser", usersController.findById);

///update usuario
router.get("/users/edit/:idUser", usersController.updateUser);
router.put(
  "/users/edit/:idUser",
  uploadUser.single("userImage"),
  usersController.updatedUser
);

//borrar usuario
router.delete("/users/delete/:idUser", usersController.delete);

//lista usuarios
router.get("/users", usersController.listAll); //admin/users

module.exports = router;
