const db = require("../../database/models");

const apiProducts = {
  products: function (req, res) {
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
};

module.exports = apiProducts;
