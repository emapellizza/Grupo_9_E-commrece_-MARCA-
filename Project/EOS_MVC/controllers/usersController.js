const fs = require("fs");
const { validationResult } = require("express-validator");


const usersController = {
  login: function (req, res) {
    return res.render("./users/login");
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  userRegistered: function (req, res) {
    return res.render("./users/userRegistered");
  },

  create: function (req, res) {

    //Validación 
    let errors = validationResult(req);

    if(errors.isEmpty()) {
      // Almaceno los datos del usuario
      let user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        password: req.body.password,
      };

      // Guardar usuario
      let usuarioJSON = JSON.stringify(user);
      fs.appendFileSync("./data/usuarios.json", usuarioJSON);
      res.redirect("/userRegistered");

    }  else {

      return res.render("./users/register",{ errors: errors.mapped() });
      }
    
  }
};

module.exports = usersController;
