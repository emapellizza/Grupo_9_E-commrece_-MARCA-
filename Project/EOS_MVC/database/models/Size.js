module.exports = function (sequelize,dataTypes) {

    let alias = "Size";

    let cols = {
        id_size: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        size: {
            type: dataTypes.STRING(45)
        }
    }

    let config = {
        tablename: "sizes",
        timestamps: false
    }

    const Size = sequelize.define(alias, cols, config);

    Size.associate = function(models) {
        Size.belongsToMany(models.Product, {
            as: "products",
            through: "product_size",
            foreignKey: "id_size",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return Size;

}