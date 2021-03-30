const fs = require("fs");
const { validationResult } = require("express-validator");
const tablaJson = require('../data/jsonManager');

const productsJson = tablaJson("products")


const productsController = {
  listAll: function (req, res) {
    let products = productsJson.all()

    return res.render("./products/list", { products });
  },

  show: (req, res) => {
    let productDetail = productsJson.find(req.params.idProduct);

    res.render("./products/detail", { productDetail });
  },

  productCart: function (req, res) {
    return res.render("./products/cart");
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
        estado: "activo",
      };

      let productId = productsJson.create(product);

      res.redirect("./detail/" + productId);
    } else {
        return res.render("products/new", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

 


};

module.exports = productsController;
