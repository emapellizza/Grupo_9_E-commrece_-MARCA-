module.exports = function (sequelize,dataTypes) {

    let alias = "Productos";

    let cols = {
        id_product: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        imagen: {
            type: dataTypes.VARCHAR(45)
        },
        id_marca: {
            type: dataTypes.INTEGER(11)
        },
        precio: {
            type: dataTypes.DECIMAL(6,2)
        },
        id_category: {
            type: dataTypes.INTEGER(11)
        },
        id_genre: {
            type: dataTypes.INTEGER(11)
        },
        short_description: {
            type: dataTypes.VARCHAR(45)
        },
        long_description: {
            type: dataTypes.VARCHAR(45)
        },
        disponible: {
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tablename: "products",
        timestamps: false
    }

    const Productos = sequelize.define(alias, cols, config);

    return Productos;

}