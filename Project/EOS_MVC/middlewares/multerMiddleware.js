const multer = require("multer");
const path = require("path");

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/images/users"));
    },
    filename: (req, file, cb) => {
      const fileName = "user-" + Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });
  
  const uploadUser = multer({ storage });

  module.exports = uploadUser;