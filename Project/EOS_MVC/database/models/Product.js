module.exports = function (sequelize,dataTypes) {

    let alias = "Product";

    let cols = {
        id_product: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING(45)
        },
        id_brand: {
            type: dataTypes.INTEGER(11)
        },
        model: {
            type: dataTypes.STRING(45)
        },
        price: {
            type: dataTypes.DECIMAL(6,2)
        },
        id_category: {
            type: dataTypes.INTEGER(11)
        },
        id_genre: {
            type: dataTypes.INTEGER(11)
        },
        short_description: {
            type: dataTypes.STRING(45)
        },
        long_description: {
            type: dataTypes.STRING(45)
        },
        available: {
            type: dataTypes.STRING(3)
        }
    }

    let config = {
        tablename: "products",
        timestamps: false
    }

    const Product = sequelize.define(alias, cols, config);

    //Asociaciones
    Product.associate = function(models) {
        // Usuarios
        Product.belongsToMany(models.User, {
            as: "users",
            through: "cart",
            foreignKey: "id_product",
            otherKey: "id_user",
            timestamps: false
        })
        // Colores
        Product.belongsToMany(models.Color, {
            as: "colors",
            through: "stock",
            foreignKey: "id_product",
            otherKey: "id_color",
            timestamps: false
        })
        // Talles
        Product.belongsToMany(models.Size, {
            as: "sizes",
            through: "stock",
            foreignKey: "id_product",
            otherKey: "id_size",
            timestamps: false
        })
        // Marca
        Product.belongsTo(models.Brand, {
            as: "brands",
            foreignKey: "id_brand" 
        })
        // Categoria
        Product.belongsTo(models.Category, {
            as: "categories",
            foreignKey: "id_category"
        })
         // Género
        Product.belongsTo(models.Genre, {
            as: "genres",
            foreignKey: "id_genre"
        })
    }

    return Product;

}