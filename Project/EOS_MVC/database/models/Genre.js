module.exports = function (sequelize,dataTypes) {

    let alias = "Genre";

    let cols = {
        id_genre: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        genre: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "genres",
        timestamps: false
    }

    const Genre = sequelize.define(alias, cols, config);

    return Genre;

}