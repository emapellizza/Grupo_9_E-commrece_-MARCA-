const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require('../data/jsonManager');
const userJson = tablaJson("users");

const usersController = {

  listAll: function (req, res) {
    let users = userJson.all()

    return res.render("./products/list", { users });
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  userCreated: function (req, res) {
    return res.render("./users/userCreated");
  },

  saveUser: function (req, res) {
    // Validacion
    let errors = validationResult(req);

    let userInDb = userJson.findByField("email",req.body.email);
    if(userInDb){
      return res.render("users/register",{
        errors: {
          email: {
            msg: "Este email ya esta registrado"
          }
        },
        oldData: req.body

      });
    }

    if (errors.isEmpty()) {
      // Almaceno los datos del producto
      const user = {
        imageUser: req.file.filename,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        dateOfBirth: req.body.dateOfBirth,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        password2: bcrypt.hashSync(req.body.confirmPassword, 10),
      };

      let nombre = userJson.create(user);

      res.redirect("profile");
    } else {
      return res.render("users/register", {
        errors: errors.array(),
        old: req.body,
      });
    }
  },

  profile:function(req,res) {
    res.render("users/profile",{
      user: req.session.userLogged
    });

  },

  logout: function(req,res){
    req.session.destroy();//borra la session
    return res.redirect("/");
  },

};

module.exports = usersController;
