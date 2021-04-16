module.exports = function (sequelize,dataTypes) {

    let alias = "Marca";

    let cols = {
        id_brand: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        marca: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "brands",
        timestamps: false
    }

    const Marca = sequelize.define(alias, cols, config);

    return Marca;

}