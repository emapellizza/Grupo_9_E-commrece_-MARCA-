const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require('../data/jsonManager');
const userList = tablaJson("users");


const loginController = {

    login: function (req, res) {

        return res.render("./users/login");
    },

    loginProcess: function(req,res){
       //agregar validaciones
       //1 ver si estoy registrado
       let userToLog = userList.findByField("email",req.body.email);
      
       if(userToLog){
           let checkPassword = bcrypt.compareSync(req.body.password,userToLog.password);
           if(checkPassword){
               delete userToLog.password;//por seguridad
               delete userToLog.password2;
               req.session.userLogged = userToLog;//registro de 
               return res.redirect("/");
           
       }
        return res.render("./users/login",{ 
            errors:{
                email: {
                    msg: "password invalida"
                }
            }
        });
    }
    
       return res.render("./users/login",{ 
           errors:{
               email: {
                   msg: " Usuario no registrado"
               }
           }
       })

    },

      

};

module.exports = loginController;