module.exports = function (sequelize,dataTypes) {

    let alias = "Categories";

    let cols = {
        id_category: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        categoria: {
            type: dataTypes.VARCHAR(45)
        }
    }

    let config = {
        tablename: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    return Category;

}