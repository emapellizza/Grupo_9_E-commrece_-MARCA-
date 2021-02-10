const productsController = {

  productCart: function (req, res) {
    return res.render("productCart");
  },

  productDetail: function (req, res) {
    return res.render("productDetail");
  },
   
  newProduct: function (req, res) {
    return res.render("newProduct");
  },
  
  updateProduct: function (req, res) {
    return res.render("updateProduct");
  }

};
  
  module.exports = productsController;
  