const { validationResult } = require("express-validator");
const db = require("../../database/models");
const usersController = require("../jsonsControllers/usersController");

const dbProductController = {
  listAll: function (req, res) {
    db.Product.findAll({ include: [{ association: "brands" }] }).then(function (
      products
    ) {
      return res.render("./products/list", { products: products });
    });
  },

  show: (req, res) => {
    db.Product.findByPk(req.params.idProduct, {
      include: [
        { association: "brands" },
        { association: "colors" },
        { association: "sizes" },
      ],
    }).then(function (productDetail) {
      return res.render("./products/detail", { productDetail: productDetail });
    });
  },

  newProduct: function (req, res) {
    if (req.session.adminLogged) {
      let pedidoMarca = db.Brand.findAll();
      let pedidoCategoria = db.Category.findAll();
      let pedidoGenero = db.Genre.findAll();

      Promise.all([pedidoMarca, pedidoCategoria, pedidoGenero]).then(function ([
        marca,
        categoria,
        genero,
      ]) {
        return res.render("./products/new", {
          marca: marca,
          categoria: categoria,
          genero: genero,
        });
      });
    } else return res.redirect("/");
  },

  saveProduct: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Product.create({
        image: req.file.filename,
        id_brand: req.body.brand,
        model: req.body.model,
        price: req.body.price,
        id_category: req.body.category,
        id_genre: req.body.genre,
        short_description: req.body.shortDescription,
        long_description: req.body.longDescription,
        available: "Yes",
      });

      return res.redirect("/products");
    } else {
      return res.render("products/new", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  updateProduct: function (req, res) {
    if (req.session.adminLogged) {
      let productToEdit = db.Product.findByPk(req.params.idProduct, {
        include: [{ association: "brands" }],
      });
      let pedidoMarca = db.Brand.findAll();
      let pedidoCategoria = db.Category.findAll();
      let pedidoGenero = db.Genre.findAll();

      Promise.all([
        productToEdit,
        pedidoMarca,
        pedidoCategoria,
        pedidoGenero,
      ]).then(function ([prod, marca, categoria, genero]) {
        return res.render("./products/update", {
          prod: prod,
          marca: marca,
          categoria: categoria,
          genero: genero,
        });
      });
    } else {
      return res.redirect("/");
    }
  },

  updatedProduct: function (req, res) {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.Product.update(
        {
          image: req.file.filename,
          id_brand: req.body.brand,
          model: req.body.model,
          price: req.body.price,
          id_category: req.body.category,
          id_genre: req.body.genre,
          short_description: req.body.shortDescription,
          long_description: req.body.longDescription,
          available: req.body.available,
        },
        { where: { id_product: req.params.idProduct } }
      );
      let id = req.params.idProduct;

      return res.redirect("/products/detail/" + id);
    } else {
      return res.render("products/new", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  delete: function (req, res) {
    if (req.session.adminLogged) {
      db.Product.destroy({
        where: { id_product: req.params.idProduct },
      });
   }
  },

  cart: function (req, res) {

      if (req.session.userLogged) {

        let user = req.session.userLogged;
        let pedidoUsuario = db.User.findByPk(user.id);
        let pedidoProducto = db.Product.findAll();
        let pedidoCarritos = db.Cart.findAll();

        Promise.all([
          pedidoUsuario,
          pedidoProducto,
          pedidoCarritos,
        ]).then(function ([ usuario, producto, carrito ]) {
          return res.render("./products/cart", {
            usuario: usuario,
            producto: producto,
            carrito: carrito,
          });
        });
        
      }
    },

  productToCart: function (req, res) {
    if (req.session.userLogged) {
      let user = req.session.userLogged;

      let price = req.body.price;
      let quantity = req.body.quantity;

      let subtotal = price * quantity;

      db.Cart.create({
        id_user: user.id,
        id_product: req.body.id_product,
        price: req.body.price,
        quantity: req.body.quantity,
        color: req.body.color,
        size: req.body.size,
        subtotal: subtotal,
      });

      

      return res.redirect("./");
    }
  },

  deleteCart: function (req, res) {
    if (req.session.userLogged) {
      
      db.Cart.destroy({
        where: { id_cart: req.body.id_cart }
      });

      return res.redirect("../");
    }
  },

  productToOrder: function (req, res) {
    if (req.session.userLogged) {
      let user = req.session.userLogged;



      db.Order.create({
        id_user: user.id,
        

      });

    return res.redirect("./products/order");
      
   };
  },

  order: function (req, res) {
    if (req.session.userLogged) {

    return res.render("./products/order",);
              
   }
  },

  orderDone: function (req, res) {
    if (req.session.userLogged) {

      let user = req.session.userLogged;

      db.Shipping_information.create({
        id_user: user.id,
        address:req.body.address,
        city: req.body.city,
        state: req.body.state,
        postal_code: req.body.postal_code,
        phone_number: req.body.phone,
           
      });
      
      return res.render("./products/thanks",);
   };
  },

  thanks: function (req, res) {
    if (req.session.userLogged) {

    return res.render("./products/thanks",);
              
   }
  },


};

module.exports = dbProductController;
