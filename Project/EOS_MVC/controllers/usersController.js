const fs = require("fs");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

// Lectura del archivo JSON (luego se debe parsear)
let usersJSON = fs.readFileSync("./data/users.json", {
  encoding: "utf-8",
});

const usersController = {
  login: function (req, res) {
    return res.render("./users/login");
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  userCreated: function (req, res) {
    return res.render("./users/userCreated");
  },

  store: function (req, res) {
    // Validación
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      // Almaceno los datos del usuario
      const user = {
        imageUser: req.file.fileName,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        password2: bcrypt.hashSync(req.body.confirmPassword, 10),
      };

      let users;
      if (usersJSON == "") {
        users = [];
      } else {
        users = JSON.parse(usersJSON);
      }
      // Agrego el usuario a la lista
      users.push(user);

      // Guardar usuario
      usersJSON = JSON.stringify(users, null, 2);
      fs.writeFileSync("./data/users.json", usersJSON);

      res.redirect("userCreated");
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
};

module.exports = usersController;
