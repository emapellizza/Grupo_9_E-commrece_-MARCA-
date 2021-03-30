const { validationResult } = require("express-validator");
const tablaJson = require('../data/jsonManager');

const productsJson = tablaJson("products")


const productsController = {
  listAll: function (req, res) {
    let products = productsJson.all()

    return res.render("./products/list", { products });
  },

  
  productCart: function (req, res) {
    return res.render("./products/cart");
  },

  productDetail: function (req, res) {
    let productDetail = productsJson.find(req.params.idProduct);
    return res.render("./products/detail", { productDetail });
  },

  newProduct: function (req, res) {
    return res.render("./products/new");
  },

  saveProduct: function (req, res) {
    // Validacion
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // Almaceno los datos del producto
      const product = {
        imagen: req.file.filename,
        marca: req.body.marcaProducto,
        modelo: req.body.modeloProducto,
        precio: req.body.precioProducto,
        categoria: req.body.categoriaProducto,
        genero: req.body.generoProducto,
        shortDescripcion: req.body.shortDescripcion,
        longDescripcion: req.body.longDescripcion,
        talles: req.body.tallesProducto,
        colores: req.body.coloresProducto,
      };

      let nombre = productsJson.create(product);

      res.redirect("/products/");
    } else {
      return res.render("products/new", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  show: (req, res) => {
    let product = productsJson.find(req.params.id);

    res.render('products/detail', { product });
},

  edit: function (req, res) {
    let idProduct = req.params.idProduct;
    let productToEdit = products[idProduct];
    return res.render("./products/update", { productToEdit: productToEdit });
  },
  update: function (req, res) {
    res.send("Editado");
  },
};

module.exports = productsController;
