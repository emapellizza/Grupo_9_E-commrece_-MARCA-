const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require("../../data/jsonManager");
const messagesJson = tablaJson("messages");
const productJson = tablaJson("products");

const adminController = {

    view: function(req,res){

      if(req.session.adminLogged){
        return res.render("./users/adminView");
      }
      else
       return res.redirect("/");
     
    },
    messages: function(req,res){

      if(req.session.adminLogged){

        let messages = messagesJson.all()
        return res.render("./users/messages", { messages });
      }
      else
       return res.redirect("/");
     
    }

};

module.exports = adminController;