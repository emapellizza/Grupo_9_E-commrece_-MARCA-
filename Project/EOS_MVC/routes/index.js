const express = require("express");
const router = express.Router();
const mainController = require("../controllers/jsonsControllers/mainController");

router.get("/", mainController.index);
router.get("/about", mainController.about);
router.get("/faq", mainController.faq);
router.get("/contact", mainController.contact);
router.post("/contact", mainController.newMessage);
router.get("/messageOk", mainController.messageOk);
router.get("/stores", mainController.stores);

module.exports = router;
