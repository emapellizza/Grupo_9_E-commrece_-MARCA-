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
        price: {
            type: dataTypes.DECIMAL(6,2)
        }
    }

    let config = {
        tablename: "cart",
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