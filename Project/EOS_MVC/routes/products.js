const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const productsController = require("../controllers/productsController");

// Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../public/images/products"));
  },
  filename: (req, file, cb) => {
    const fileName = "product-" + Date.now() + path.extname(file.originalname);
    cb(null, fileName);
  },
});
const upload = multer({ storage });

// Listado de productos
router.get("/", productsController.listAll);

// Carrito
router.get("/cart", productsController.productCart);

// Detalle de producto
router.get("/detail/:idProduct", productsController.productDetail);

// Crear un nuevo producto:
router.get("/new", productsController.newProduct);
router.post(
  "/new",
  upload.single("imagenProducto"),
  productsController.saveProduct
);

//Rutas para actualizar un producto:
router.get("/update/:idProduct", productsController.updateProduct);

// Aca va la ruta a una nueva pagina "producto a actualizar" o algo asi

module.exports = router;
