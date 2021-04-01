
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
   // console.log("estas en profile");
   // console.log(req.session);
    res.render("users/profile",{
      user: req.session.userLogged
    });

  },

/*
  show: (req, res) => {
    let product = productsJson.find(req.params.id);

    res.render('products/detail', { product });
},

  edit: function (req, res) {
    let idProduct = req.params.idProduct;
    let productToEdit = products[idProduct];
    return res.render("./products/update", { productToEdit: productToEdit });
  },
  update: function (req, res) {
    res.send("Editado");
  },*/
};

module.exports = usersController;
