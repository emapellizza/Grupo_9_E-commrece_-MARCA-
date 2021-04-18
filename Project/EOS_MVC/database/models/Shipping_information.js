module.exports = function (sequelize,dataTypes) {

    let alias = "Shipping_information";

    let cols = {
        id_shipping_information: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        direccion: {
            type: dataTypes.VARCHAR(45)
        },
        localidad: {
            type: dataTypes.VARCHAR(45)
        },
        provincia: {
            type: dataTypes.VARCHAR(45)  
        },
        codigo_postal: {
            type: dataTypes.VARCHAR(45)    
        },
        numero_telefono: {
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