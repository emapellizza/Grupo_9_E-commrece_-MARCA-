module.exports = function (sequelize,dataTypes) {

    let alias = "Direccion_Envio";

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

    const Direccion_Envio = sequelize.define(alias, cols, config);

    return Direccion_Envio;

}