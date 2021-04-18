module.exports = function (sequelize,dataTypes) {

    let alias = "Users";

    let cols = {
        id_user: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement = true
        },
        imagen: {
            type: dataTypes.VARCHAR(45)
        },
        nombre: {
            type: dataTypes.VARCHAR(45)
        },
        apellido: {
            type: dataTypes.VARCHAR(45)
        },
        f_nacimiento: {
            type: dataTypes.DATEONLY
        },
        email: {
            type: dataTypes.VARCHAR(45)
        },
        password: {
            type: dataTypes.VARCHAR(45)
        },
        admin: {
            type: dataTypes.TINYINT
        },
        activo: {
            type: dataTypes.TINYINT
        }
    }

    let config = {
        tablename: "users",
        timestamps: false
    }

    const User = sequelize.define(alias, cols, config);

    //Asociaciones
    User.associate = function(models){
        // Direcciones de envio
        User.hasMany(models.Shipping_information, {
            as: "shipping_information",
            foreignKey: "id_user"
        })
        // Productos
        User.belongsToMany(models.Products, {
            as: "products",
            through: "user_product",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return User;

}