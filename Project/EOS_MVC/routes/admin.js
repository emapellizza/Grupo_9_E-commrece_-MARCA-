const express = require("express");
const router = express.Router();

//const validateRegister = require("../middlewares/valRegProduct");
const uploadProduct = require("../middlewares/multerMiddProduct");
const uploadUser = require("../middlewares/multerMiddleware");

const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");
//para la session
const authMiddleware = require("../middlewares/authMiddleware");




//vista administrador
router.get("/", adminController.view);

////////////rutas de productos//////////
//lista productos
router.get("/products", productsController.listAll);
//Detalle de producto
router.get("/products/detail/:idProduct", productsController.show);

//cear un nuevo producto:
router.get("/products/new", productsController.newProduct);
router.post("/products/new",uploadProduct.single("productImage"),productsController.saveProduct);
//Rutas para actualizar un producto:
router.get("/products/edit/:idProduct", productsController.updateProduct);
router.put("/products/edit/:idProduct", uploadProduct.single("productImage"),
 productsController.updatedProduct);
//borrar un producto
router.delete("/products/delete/:idProduct", productsController.delete);

///////rutas usuarios///////
//lista usuarios
router.get("/users", usersController.listAll); //admin/users
//detalle usuario
router.get("/profile", authMiddleware, usersController.profile);
router.get("/users/detail/:idUser", usersController.findById);
///update usuario
router.get("/users/edit/:idUser", usersController.updateUser);
router.put("/users/edit/:idUser",uploadUser.single("imagenUsuario"),
  usersController.updatedUser);
//borrar usuario
router.delete("/users/delete/:idUser", usersController.delete);


module.exports = router;
