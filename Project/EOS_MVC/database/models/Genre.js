module.exports = function (sequelize,dataTypes) {

    let alias = "Genres";

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

    const Genre = sequelize.define(alias, cols, config);

    return Genre;

}