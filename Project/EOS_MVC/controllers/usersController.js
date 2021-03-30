const fs = require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require('../data/jsonManager');

const usersJson = tablaJson("users")

const usersController = {
  login: function (req, res) {
    return res.render("./users/login");
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  userCreated: function (req, res) {
    let userDetail = usersJson.find(req.params.idUser);
    
   res.render("./users/userCreated", { userDetail });
  },

  show: (req, res) => {
    let userDetail = usersJson.find(req.params.idUser);
    
   res.render("./users/detail", { userDetail });
  },

  store: function (req, res) {

    // Validación
    let errors = validationResult(req);

    if (errors.isEmpty()) {

      // Almaceno los datos del usuario
      const user = {
        imagenUsuario: req.file.fileName,
        nombre: req.body.firstName,
        apellido: req.body.lastName,
        fechaDeNacimiento: req.body.dateOfBirth,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        password2: bcrypt.hashSync(req.body.confirmPassword, 10),
        estado: "activo"
      };

      let userId = usersJson.create(user);

      res.redirect("./userCreated/" + userId);
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  }
};

module.exports = usersController;
