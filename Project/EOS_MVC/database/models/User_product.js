module.exports = function (sequelize,dataTypes) {

    let alias = "User_product";

    let cols = {
        id_user_product: {
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
        tablename: "user_product",
        timestamps: false
    }

    const User_product = sequelize.define(alias, cols, config);

    return User_product;

}