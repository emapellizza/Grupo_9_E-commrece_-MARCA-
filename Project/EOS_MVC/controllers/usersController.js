const usersController = {
    
  login: function (req, res) {
    return res.render("./users/login");
  },

  register: function (req, res) {
    return res.render("./users/register");
  },

  create: function (req, res) {
      //Aca va el codigo para crear usuario
    return res.redirect("index");
  }
    
};

module.exports = usersController;