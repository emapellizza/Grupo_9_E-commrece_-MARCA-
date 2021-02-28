const fs = require("fs");

const usersController = {
  login: function (req, res) {
    return res.render("./users/login");
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  create: function (req, res) {
    // Falta la validación

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

    res.redirect("/login");
  },
};

module.exports = usersController;
