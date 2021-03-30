const mainController = {
  index: function (req, res) {
    return res.render("index");
  },
  about: function (req, res) {
    return res.render("about");
  },
  faq: function (req, res) {
    return res.render("faq");
  },
};

module.exports = mainController;
