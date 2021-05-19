const tablaJson = require("../../data/jsonManager");
const messagesJson = tablaJson("messages");


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
  newMessage: function (req, res) {

    const message = {
      name: req.body.name,
      email: req.body.email,
      message: req.body.mensaje,
    };

    messagesJson.create(message);

    res.redirect("messageOk");
  },
  messageOk: function (req, res) {
    return res.render("messageOk");
  },
  stores: function (req, res) {
    return res.render("stores");
  },
};

module.exports = mainController;
