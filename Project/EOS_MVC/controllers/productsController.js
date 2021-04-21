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

  delete: function (req, res) {
    if (req.session.adminLogged) {
      productToDelete = productsJson.find(req.params.idProduct);
      productToDelete.active = "false";
      res.send(
        "borrado PRODUCTO" +
          " " +
          productToDelete.id +
          " " +
          productToDelete.active
      );

      //res.redirect("/admin");
    } else return res.redirect("/");
  },
};

module.exports = productsController;
