const { validationResult } = require("express-validator");
const db = require("../../database/models");

const dbProductController = {

    listAll: function (req, res) {
            
      db.Product.findAll()
        .then(function(products){
          return res.render("./products/list", { products: products });
        })           
        
    },

    show: (req, res) => {
      
      db.Product.findByPk(req.params.idProduct)
        .then(function(productDetail){
          return  res.render("./products/detail", { productDetail: productDetail });
      })    
     
    },

    productCart: function (req, res) {
      return res.render("./products/cart");
    },

    
    newProduct: function (req, res) {
      if (req.session.adminLogged) {

        let pedidoMarca = db.Brand.findAll();
        let pedidoCategoria = db.Category.findAll();
        let pedidoGenero = db.Genre.findAll();

        Promise.all([pedidoMarca,pedidoCategoria,pedidoGenero])
          .then(function([marca,categoria,genero]){
            return res.render("./products/new", {marca:marca, categoria:categoria, genero:genero}); 
          });

      } else return res.redirect("/");
    },

    saveProduct: function (req, res) {

      let errors = validationResult(req);

      if (errors.isEmpty()) { 
              
        db.Product.create({
          image: req.file.filename,
          id_brand: req.body.brand,
          model: req.body.model,
          price: req.body.price,
          id_category: req.body.category,
          id_genre: req.body.genre,
          short_description: req.body.shortDescription,
          long_description: req.body.longDescription,
              
        });
    
        return res.redirect("/");

      } else {
          return res.render("products/new", {
            errors: errors.mapped(),
            old: req.body,
          });
      }
    }
}

module.exports = dbProductController;