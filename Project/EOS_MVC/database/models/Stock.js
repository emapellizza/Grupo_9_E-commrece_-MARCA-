module.exports = function (sequelize,dataTypes) {

    let alias = "Stock";

    let cols = {
        id_stock: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        id_product: {
            type: dataTypes.INTEGER(11)
        },
        id_color: {
            type: dataTypes.INTEGER(11)
        },
        id_size: {
            type: dataTypes.INTEGER(11)
        },
        quantity: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "stock",
        timestamps: false
    }

    const Stock = sequelize.define(alias, cols, config);

    return Stock;

}