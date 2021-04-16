module.exports = function (sequelize,dataTypes) {

    let alias = "Genero";

    let cols = {
        id_genre: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        genero: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "genres",
        timestamps: false
    }

    const Genero = sequelize.define(alias, cols, config);

    return Genero;

}