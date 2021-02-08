const mainController = {
  index: function (req, res) {
    return res.render("index");
  },

  login: function (req, res) {
    return res.render("login");
  },

  productCart: function (req, res) {
    return res.render("productCart");
  },

  productDetail: function (req, res) {
    return res.render("productDetail");
  },

  register: function (req, res) {
    return res.render("register");
  },
  // logica momentanea para previzualizar las vistas
  newProduct: function (req, res) {
    return res.render("newProduct");
  },

  updateProduct: function (req, res) {
    return res.render("updateProduct");
  },
};

module.exports = mainController;
