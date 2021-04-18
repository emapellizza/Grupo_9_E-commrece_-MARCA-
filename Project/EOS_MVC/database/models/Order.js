module.exports = function (sequelize,dataTypes) {

    let alias = "Orders";

    let cols = {
        id_order: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        id_user_product: {
            type: dataTypes.INTEGER(11)
        },
        fecha: {
            type: dataTypes.DATE
        },
        items: {
            type: dataTypes.INTEGER(11)
        },
        total: {
            type: dataTypes.DECIMAL(6,2)
        },
        shipping_info: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "orders",
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);

    // Asociaciones
    Order.associate = function (models) {
        // Usuario_Producto
        Order.belongsTo(models.User_product, {
            foreignKey: "id_user_product",
            as: "user_product"
        })

    }

    return Order;

}