const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require("../data/jsonManager");
const userList = tablaJson("users");

const loginController = {
  login: function (req, res) {
    return res.render("./users/login");
  },

  logout: function(req,res){
    res.clearCookie("userEmail");//borra la cookie
    req.session.destroy();//borra la session
    return res.redirect("/");
  },

  loginProcess: function (req, res) {
    //agregar validaciones
    //1 ver si estoy registrado
    let userToLog = userList.findByField("email", req.body.email);

    if (userToLog) {
      let checkPassword = bcrypt.compareSync(req.body.password,userToLog.password);

      if (checkPassword && userToLog.email == "admin@admin.com") { 
        delete userToLog.password; //por seguridad
        req.session.adminLogged = userToLog;
        return res.redirect("../admin/");
      } 

      if (checkPassword) {
          delete userToLog.password; //por seguridad
          req.session.userLogged = userToLog; //login de usuario
         
          if(req.body.conectado){///conectado es el name del checkbox para permanecer en session con las cookies
            console.log(req.body.conectado);
            res.cookie("userEmail",req.body.email,{maxAge:(1000 * 60) * 10})
            //dura dos minutos//1000ms * 60 = 1min *2 dos minutos
          }
          return res.redirect("/");
      }
      
      return res.render("./users/login", {
            errors: {
            email: {
            msg: "* La contraseña es incorrecta",
            },
            },
      });
      
    }

    return res.render("./users/login", {
      errors: {
        email: {
          msg: "* El usuario o la contraseña son incorrectos",
        },
      },
    });
  }
   
 
    
}


module.exports = loginController;
