const { validationResult } = require("express-validator");
const tablaJson = require('../data/jsonManager');
const userJson = tablaJson("users");


const loginController = {
    login: function (req, res) {
        return res.render("./users/login");
    },

    loginProcess: function(req,res){
       res.send(req.body);
    },
      

};

module.exports = loginController;