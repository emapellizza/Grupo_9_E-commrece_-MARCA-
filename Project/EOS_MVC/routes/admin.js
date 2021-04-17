const express = require("express");
const router = express.Router();

const validateRegister = require("../middlewares/valRegProduct")
const uploadProduct = require("../middlewares/multerMiddProduct");
const uploadUser = require("../middlewares/multerMiddleware");

const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");
//para la session
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require ("../middlewares/authMiddleware");


                               
//vista administrador
router.get("/",adminController.view)


//buscar un producto
//router.get("/")
router.post("/editproduct/:idProduct", adminController.updateProduct);
//lista productos
router.get("/products", productsController.listAll);//admin/products
// Crear un nuevo producto:
router.get("/new", adminController.newProduct);
router.post("/new",uploadProduct.single("imagenProducto"),validateRegister,adminController.saveProduct);
// Detalle de producto
router.get("/detail/:idProduct", productsController.show);//amdin/detail/1
//Rutas para actualizar un producto:
router.get("/editproduct/:idProduct", adminController.updateProduct);
router.put("/editproduct/:idProduct", adminController.saveProduct);
//borrar un producto


//buscar un usuario
//lista usuarios
router.get("/Users", usersController.listAll);//admin/users
//detalle usuario
router.get("/profile",authMiddleware, usersController.profile);
///update usuario
router.get("/edituser/:idUser",adminController.updateUser);
router.put("/edituser/:idUser",usersController.saveUser)
//borrar usuario




module.exports = router;