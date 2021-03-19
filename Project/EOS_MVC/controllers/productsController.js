const fs = require("fs");

const productsController = {
  listAll: function (req, res) {
    return res.render("./products/list");
  },

  productCart: function (req, res) {
    return res.render("./products/cart");
  },

  productDetail: function (req, res) {
    return res.render("./products/detail");
  },

  newProduct: function (req, res) {
    return res.render("./products/new");
  },

  saveProduct: function (req, res) {
    const product = {
      imagen: req.file.filename,
      marca: req.body.marcaProducto,
      modelo: req.body.modeloProducto,
      precio: req.body.precioProducto,
      categoria: req.body.categoriaProducto,
      genero: req.body.generoProducto,
      descripcion: req.body.descripcionProducto,
      talle: req.body.tallesProducto,
      colores: req.body.coloresProducto,
    };

    let archivoUsuario = fs.readFileSync("./data/products.json", {
      encoding: "utf-8",
    });

    let products;
    if (archivoUsuario == "") {
      products = [];
    } else {
      products = JSON.parse(archivoUsuario);
    }
    // Agrego el usuario a la lista
    products.push(product);

    //Stringify y guardado
    productsJSON = JSON.stringify(products);
    fs.writeFileSync("./data/products.json", productsJSON);

    res.redirect("/products");
  },

  updateProduct: function (req, res) {
    return res.render("./products/update");
  },

  productToUpdate: function (req, res) {
    //Aca va el codigo que dice que hace con la info de actualizar producto.
    let producto = req.params.idProduct;
    return res.send("update: " + producto);
  },
};

module.exports = productsController;
