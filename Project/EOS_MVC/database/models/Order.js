module.exports = function (sequelize,dataTypes) {

    let alias = "Order";

    let cols = {
        id_order: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_cart: {
            type: dataTypes.INTEGER(11)
        },
        date: {
            type: dataTypes.DATE
        },
        items: {
            type: dataTypes.INTEGER(11)
        },
        total: {
            type: dataTypes.DECIMAL(6,2)
        },
        shipping_info: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "orders",
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);

    
    Order.associate = function (models) {
        Order.belongsTo(models.Cart, {
            as: "cart",
            foreignKey: "id_cart",
        })

    }

    return Order;

}