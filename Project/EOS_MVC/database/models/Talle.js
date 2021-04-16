module.exports = function (sequelize,dataTypes) {

    let alias = "Talle";

    let cols = {
        id_size: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        talle: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "sizes",
        timestamps: false
    }

    const Talle = sequelize.define(alias, cols, config);

    return Talle;

}