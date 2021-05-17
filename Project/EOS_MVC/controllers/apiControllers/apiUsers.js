const db = require("../../database/models");

const apiUsers = {
  show: function (req, res) {
    db.User.findAll().then((users) => {
      return res.status(200).json({
        total: users.length,
        data: users,
        status: 200,
      });
    });
  },

  showId: function (req, res) {
    db.User.findByPk(req.params.id).then((user) => {
      return res.status(200).json({
        data: user,
        status: 200,
      });
    });
  },
};

module.exports = apiUsers;
