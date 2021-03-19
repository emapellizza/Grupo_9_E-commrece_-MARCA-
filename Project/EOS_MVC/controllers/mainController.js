const mainController = {
  index: function (req, res) {
    return res.render("index");
  },
  about: function (req, res) {
    return res.render("about");
  },
};

module.exports = mainController;
