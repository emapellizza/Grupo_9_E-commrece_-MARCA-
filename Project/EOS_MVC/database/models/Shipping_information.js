module.exports = function (sequelize,dataTypes) {

    let alias = "Shipping_information";

    let cols = {
        id_shipping_information: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        address: {
            type: dataTypes.VARCHAR(45)
        },
        city: {
            type: dataTypes.VARCHAR(45)
        },
        state: {
            type: dataTypes.VARCHAR(45)  
        },
        postal_code: {
            type: dataTypes.VARCHAR(45)    
        },
        phone_number: {
            type: dataTypes.VARCHAR(45)
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

    // -- Asociaciones --
    Shipping_information.associate = function(models){
        Shipping_information.belongsTo(models.Users, {
            as: "users",
            foreignKey: "id_user"
        })
    }

    return Shipping_information;

}