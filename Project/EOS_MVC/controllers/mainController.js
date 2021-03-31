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
  contact: function (req, res) {
    return res.render("contact");
  },
};

module.exports = mainController;
