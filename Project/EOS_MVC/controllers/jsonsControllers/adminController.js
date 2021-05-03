const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require('../../data/jsonManager');
const usersJson = tablaJson("users");
const productJson = tablaJson("products");

const adminController = {

    view: function(req,res){

      if(req.session.adminLogged){
        return res.render("./users/adminView");
      }
      else
       return res.redirect("/");
     
    },

};

module.exports = adminController;