const multer = require("multer");
const path = require("path");

// Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, "../public/images/products"));
    },
    filename: (req, file, cb) => {
      const fileName = "product-" + Date.now() + path.extname(file.originalname);
      cb(null, fileName);
    },
  });
  
  const uploadProduct = multer({ storage });

  module.exports = uploadProduct;
  