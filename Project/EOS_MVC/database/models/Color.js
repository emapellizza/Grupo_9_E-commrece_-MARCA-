module.exports = function (sequelize,dataTypes) {

    let alias = "Colors";

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

    Color.assiociate = function(models) {
        Color.belongsToMany(models.Products, {
            as: "products",
            through: "product_color",
            foreignKey: "id_color",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return Color;

}