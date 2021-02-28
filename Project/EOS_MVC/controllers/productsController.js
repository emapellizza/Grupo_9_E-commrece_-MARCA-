const fs = require("fs");

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
 
    const producto = {
      imagen: req.body.imagenProducto,
      codigo: req.body.codigoProducto,
      marca: req.body.marcaProducto,
      modelo: req.body.modeloProducto,
      precio: req.body.precioProducto,
      categoria: req.body.categoriaProducto,
      genero: req.body.generoProducto,
      descripcion: req.body.descripcionProducto,
      talle: req.body.talleProducto,
      colores: req.body.coloresProducto,
    };


     const productsJSON = JSON.stringify(producto);
 
     fs.appendFileSync("./data/productos.json", productsJSON);

    res.redirect("/products");//cada producto se tiene agregar a la vista de productList
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
