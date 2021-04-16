module.exports = function (sequelize,dataTypes) {

    let alias = "Color";

    let cols = {
        id_color: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        color: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "colors",
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    return Color;

}