module.exports = function (sequelize,dataTypes) {

    let alias = "Cart";

    let cols = {
        id_cart: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_user: {
            type: dataTypes.INTEGER(11)
        },
        id_product: {
            type: dataTypes.INTEGER(11)
        },
        quantity: {
            type: dataTypes.INTEGER(11)
        },
        size: {
            type: dataTypes.INTEGER(11)
        },
        color: {
            type: dataTypes.INTEGER(11)
        },
        price: {
            type: dataTypes.INTEGER(11)
        },
        subtotal: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "carts",
        timestamps: false
    }

    const Cart = sequelize.define(alias, cols, config);

    Cart.associate = function(models){
        Cart.hasMany(models.Order, {
            as: "orders",
            foreignKey: "id_cart"
        });
    }

    return Cart;

}