const db = require("../../database/models");

const dbUserController = {

    listAll: function (req, res) {
            
      db.User.findAll()
        .then(function(users){
          return res.render("./users/list", { users: users });
        })           
        
    },


    saveUser: function (req, res) {
        
      db.User.create({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        date_of_birth: req.body.dateOfBirth,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,           
            
      });            
    
        return res.redirect("/");
    
    },

    findById: (req, res) => {      

      db.User.findByPk(req.params.idUser)
        .then(function(userDetail){
          return res.render("users/detail", { userDetail: userDetail });
        })   
      
    }
}

module.exports = dbUserController;