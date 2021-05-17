const db = require("../../database/models");

const apiProducts = {
  products: function (req, res) {
    //return res.json("hola");
    db.Product.findAll().then((product) => {
      return res.status(200).json({
        total: product.length,
        data: product,
        status: 200,
      });
    });
  },

  showId: function (req, res) {
    db.Product.findByPk(req.params.id).then((product) => {
      return res.status(200).json({
        data: product,
        status: 200,
      });
    });
  },

  // stock: function (req, res) {
  //   db.Stock.findAll().then((stock) => {
  //     return res.status(200).json({
  //       total: stock.length,
  //       data: stock,
  //       status: 200,
  //     });
  //   });
  // },
};

module.exports = apiProducts;
