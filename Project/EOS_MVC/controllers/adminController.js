const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require('../data/jsonManager');
const usersJson = tablaJson("users");
const productJson = tablaJson("products");

let adminEmail = "admin@admin.com";

const adminController = {

    view: function(req,res){

      if(req.session.adminLogged){
        return res.render("./users/adminView");
      }
      else
       return res.redirect("/");
     
    },

    newProduct: function (req, res) {

      if(req.session.adminLogged){
        return res.render("./products/new");//formulario nuevo producto
      }
      else
       return res.redirect("/");
     },
    
      saveProduct: function (req, res) {
        // Validacion
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
          // Almaceno los datos del producto
          const product = {
            imagen: req.file.filename,
            marca: req.body.marca,
            modelo: req.body.modelo,
            precio: req.body.precio,
            categoria: req.body.categoria,
            genero: req.body.genero,
            shortDescripcion: req.body.shortDescription,
            longDescripcion: req.body.longDescription,
            talles: req.body.talles,
            colores: req.body.colores,
            estado: "activo",
          };
    
          let productId = productsJson.create(product);
    
          res.redirect("./detail/" + productId);
        } else {
          return res.render("products/new", {
            errors: errors.mapped(),
            old: req.body,
          });
        };
      },

    updateUser : function (req,res){

      if(req.session.adminLogged){
        let userId = req.params.idUser;
        //busco el id en la lista 
        let userToEdit = usersJson.find(userId);
  
        res.render("./users/update",{userToEdit: userToEdit});
      }
      else
       return res.redirect("/");

    },

    updateProduct: function (req,res){


      if(req.session.adminLogged){

      let prodId = req.params.idProduct;

      let productToEdit = productJson.find(prodId)
      
      res.render("./products/update",{productToEdit :productToEdit});
      }
      else
       return res.redirect("/");
    },

};

module.exports = adminController;