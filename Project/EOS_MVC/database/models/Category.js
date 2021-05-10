module.exports = function (sequelize,dataTypes) {

    let alias = "Category";

    let cols = {
        id_category: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        category: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "categories",
        timestamps: false
    }

    const Category = sequelize.define(alias, cols, config);

    Category.associate = function(models){
        Category.hasMany(models.Product, {
            as: "products",
            foreignKey: "id_category"
        });
    }

    return Category;

}