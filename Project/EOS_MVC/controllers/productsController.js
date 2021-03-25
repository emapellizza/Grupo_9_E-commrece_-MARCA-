const fs = require("fs");
const { validationResult } = require("express-validator");

// Lectura del archivo JSON (luego se debe parsear)
let productsJSON = fs.readFileSync("./data/products.json", {
  encoding: "utf-8",
});
let products = JSON.parse(productsJSON);

const productsController = {
  listAll: function (req, res) {
    return res.render("./products/list", { products: products });
  },

  productCart: function (req, res) {
    return res.render("./products/cart");
  },

  productDetail: function (req, res) {
    let idProduct = req.params.idProduct;
    let productDetail = products[idProduct];
    return res.render("./products/detail", { productDetail: productDetail });
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

      let products;
      if (productsJSON == "") {
        products = [];
      } else {
        products = JSON.parse(productsJSON);
      }
      // Agrego el producto a la lista
      products.push(product);

      //Stringify y guardado
      productsJSON = JSON.stringify(products, null, 2);
      fs.writeFileSync("./data/products.json", productsJSON);

      res.redirect("/products");
    } else {
      return res.render("products/new", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  edit: function (req, res) {
    let idProduct = req.params.idProduct;
    let productToEdit = products[idProduct];
    return res.render("./products/update", { productToEdit: productDetail });
  },
  update: function (req, res) {
    res.send("Editado");
  },
};

module.exports = productsController;
