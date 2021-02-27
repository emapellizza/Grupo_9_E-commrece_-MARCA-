const productsController = {
  products: function (req, res) {
    return res.render("./products/productList");
  },

  productCart: function (req, res) {
    return res.render("./products/productCart");
  },

  productDetail: function (req, res) {
    return res.render("./products/productDetail");
  },

  newProduct: function (req, res) {
    return res.render("./products/newProduct");
  },

  saveProduct: function (req, res) {
    //Aca va el codigo para cuando se guarda un producto.
    return res.send("Producto guardado");
  },

  updateProduct: function (req, res) {
    return res.render("./products/updateProduct");
  },

  productToUpdate: function (req, res) {
    //Aca va el codigo que dice que hace con la info de actualizar producto.
    let producto = req.params.idProduct;
    return res.send("updateProduct: " + producto);
  },
};

module.exports = productsController;
