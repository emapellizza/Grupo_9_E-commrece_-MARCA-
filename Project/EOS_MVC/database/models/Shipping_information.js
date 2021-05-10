module.exports = function (sequelize,dataTypes) {

    let alias = "Shipping_information";

    let cols = {
        id_shipping_information: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        address: {
            type: dataTypes.STRING(45)
        },
        city: {
            type: dataTypes.STRING(45)
        },
        state: {
            type: dataTypes.STRING(45)  
        },
        postal_code: {
            type: dataTypes.STRING(45)    
        },
        phone_number: {
            type: dataTypes.STRING(45)
        },
        id_user: {
            type: dataTypes.INTEGER(11)
        }
    }

    let config = {
        tablename: "shipping_information",
        timestamps: false
    }

    const Shipping_information = sequelize.define(alias, cols, config);

    Shipping_information.associate = function(models){
        Shipping_information.belongsTo(models.User, {
            as: "users",
            foreignKey: "id_user"
        });
    }

    return Shipping_information;

}