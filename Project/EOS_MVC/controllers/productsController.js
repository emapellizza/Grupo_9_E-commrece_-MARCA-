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

};

module.exports = productsController;
