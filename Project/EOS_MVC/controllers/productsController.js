const { validationResult } = require("express-validator");
const tablaJson = require("../data/jsonManager");

const productsJson = tablaJson("products");

const productsController = {
  listAll: function (req, res) {
    let products = productsJson.all();

    return res.render("./products/list", { products });
  },

  show: (req, res) => {
    let productDetail = productsJson.find(req.params.idProduct);

    res.render("./products/detail", { productDetail });
  },

  productCart: function (req, res) {
    return res.render("./products/cart");
  },

  saveProduct: function (req, res) {
    // Validacion
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // Almaceno los datos del producto
      const product = {
        image: req.file.filename,
        brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        category: req.body.category,
        genre: req.body.genre,
        shortDescription: req.body.shortDescription,
        longDescription: req.body.longDescription,
        size: req.body.size,
        color: req.body.color,
        active: "true",
      };

      let productId = productsJson.create(product);

      return res.redirect("./detail/" + productId);
    } else {
      return res.render("products/new", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  newProduct: function (req, res) {
    if (req.session.adminLogged) {
      return res.render("./products/new"); //formulario nuevo producto
    } else return res.redirect("/");
  },

  updateProduct: function (req, res) {
    if (req.session.adminLogged) {
      let prodId = req.params.idProduct;

      let productToEdit = productsJson.find(prodId);

      res.render("./products/update", { productToEdit: productToEdit });
    } else {
      return res.redirect("/");
    }
  },

  updatedProduct: function (req, res) {
    if (req.session.adminLogged) {
      // Validacion
      let errors = validationResult(req);
      const productToUpdate = productsJson.find(req.params.idProduct);
      if (errors.isEmpty()) {
        // Almaceno los datos del producto

        // productToUpdate.image = req.file.filename
        productToUpdate.brand = req.body.brand;
        productToUpdate.model = req.body.model;
        productToUpdate.price = req.body.price;
        productToUpdate.category = req.body.category;
        productToUpdate.genre = req.body.genre;
        productToUpdate.shortDescription = req.body.shortDescription;
        productToUpdate.longDescription = req.body.longDescription;
        productToUpdate.size = req.body.size;
        productToUpdate.color = req.body.color;
        productToUpdate.active = "true";
      }

      let productId = productsJson.update(productToUpdate);

      res.redirect("../detail/" + productId);
    } else {
      return res.render("products/update", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  delete: function (req, res) {
    if (req.session.adminLogged) {
      let productToDelete = productsJson.find(req.params.idProduct);
      let productDeleted = productsJson.delete(productToDelete);
      res.send("PRODUCTO ELIMINADO" + productDeleted.id);

      //res.redirect("/admin");
    } else return res.redirect("/");
  },
};

module.exports = productsController;
