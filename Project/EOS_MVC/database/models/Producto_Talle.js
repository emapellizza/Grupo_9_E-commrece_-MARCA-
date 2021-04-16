module.exports = function (sequelize,dataTypes) {

    let alias = "Producto_Talle";

    let cols = {
        id_product_size: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        id_product: {
            type: dataTypes.INTEGER(11)
        },
        id_size: {
            type: dataTypes.INTEGER(11)
        },
        stock: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "product_size",
        timestamps: false
    }

    const Producto_Talle = sequelize.define(alias, cols, config);

    return Producto_Talle;

}