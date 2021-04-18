const express = require("express");
const router = express.Router();

const validateRegister = require("../middlewares/valRegProduct")
const uploadProduct = require("../middlewares/multerMiddProduct");

const productsController = require("../controllers/productsController");
const usersController = require("../controllers/usersController");
const loginController = require("../controllers/loginController");
const adminController = require("../controllers/adminController");
//para la session
const guestMiddleware = require("../middlewares/guestMiddleware");
const authMiddleware = require ("../middlewares/authMiddleware");


                               
//vista administrador
router.get("/",adminController.view)

//lista productos
router.get("/products", productsController.listAll);//admin/products
//lista usuarios
router.get("/users", usersController.listAll);//admin/users


// Crear un nuevo producto:
router.get("/new", adminController.newProduct);
router.post("/new",uploadProduct.single("imagenProducto"),validateRegister,adminController.saveProduct);
//borrar un producto

// Detalle de producto
router.get("/detail/:idProduct", productsController.show);//amdin/detail/1
//Rutas para actualizar un producto:
router.get("/editproduct/:idProduct", adminController.updateProduct);
router.put("/editproduct/:idProduct", adminController.saveProduct);

//detalle usuario
router.get("/profile",authMiddleware, usersController.profile);
///update usuario
router.get("/edituser/:idUser",adminController.updateUser);
router.put("/edituser/:idUser",usersController.saveUser)


//borrar usuario



module.exports = router;