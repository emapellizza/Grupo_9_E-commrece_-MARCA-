module.exports = function (sequelize,dataTypes) {

    let alias = "Product_color";

    let cols = {
        id_product_color: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        id_product: {
            type: dataTypes.INTEGER(11)
        },
        id_color: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "product_color",
        timestamps: false
    }

    const Product_color = sequelize.define(alias, cols, config);

    return Product_color;

}