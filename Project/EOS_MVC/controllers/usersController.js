const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const tablaJson = require("../data/jsonManager");
const usersJson = tablaJson("users");

const usersController = {


  listAll: function (req, res) {
    if(req.session.adminLogged){
    let users = usersJson.all();

    return res.render("./users/list", { users });
    }
    else
    return res.redirect("/");
  },

  show: (req, res) => {
    let userDetail = usersJson.find(req.params.idUser);

    res.render("./users/profile", { userDetail });
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  saveUser: function (req, res) {
    // Validacion
    let errors = validationResult(req);

    let userInDb = usersJson.findByField("email", req.body.email);
    if (userInDb) {
      return res.render("users/register", {
        errors: {
          email: {
            msg: "Este email ya esta registrado",
          },
        },
        oldData: req.body,
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
        state: "activo",
      };

      usersJson.create(user);

      res.redirect("profile");
    } else {
      return res.render("users/register", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  profile: function (req, res) {
  
    if(req.session.adminLogged){
     return(res.redirect("/admin")); 
    }

    res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  findById: (req, res) => {
    let userDetail = usersJson.find(req.params.idUser);
    //"./users/detail"
    res.render("users/detail", { userDetail });
  },

};

module.exports = usersController;
