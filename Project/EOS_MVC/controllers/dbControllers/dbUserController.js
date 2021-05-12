const { validationResult } = require("express-validator");
const db = require("../../database/models");

const dbUserController = {

    listAll: function (req, res) {
            
      db.User.findAll()
        .then(function(users){
          return res.render("./users/list", { users: users });
        })        
        
    },

    register: function (req, res) {
      return res.render("./users/register");
    },

    saveUser: function (req, res) {

      let errors = validationResult(req);
      
      if (errors.isEmpty()) { 

        db.User.create({
          image: req.file.filename,
          first_name: req.body.firstName,
          last_name: req.body.lastName,
          date_of_birth: req.body.dateOfBirth,
          email: req.body.email,
          phone: req.body.phone,
          password: req.body.password,           
              
        });            
      
        return res.redirect("/");
      
      } else {
        return res.render("users/register", {
          errors: errors.mapped(),
          old: req.body,
        });
      }
    },

    findById: (req, res) => {      

      db.User.findByPk(req.params.idUser)
        .then(function(userDetail){
          return res.render("users/detail", { userDetail: userDetail });
        })   
      
    },

    
  profile: function (req, res) {
    
    if(req.session.adminLogged){
     return(res.redirect("/admin")); 
    } 
    
    res.render("users/profile", {
      user: req.session.userLogged,
    });
  },

  delete: function (req, res) {
    if (req.session.adminLogged) {

      db.User.destroy({
        where: { id_user: req.params.idUser}
         
      });

      return res.redirect("/");
         
    };
  }
}

module.exports = dbUserController;