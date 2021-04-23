module.exports = function (sequelize,dataTypes) {

    let alias = "User";

    let cols = {
        id_user: {
            type: dataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true
        },
        image: {
            type: dataTypes.STRING(45)
        },
        first_name: {
            type: dataTypes.STRING(45)
        },
        last_name: {
            type: dataTypes.STRING(45)
        },
        date_of_birth: {
            type: dataTypes.DATEONLY
        },
        email: {
            type: dataTypes.STRING(45)
        },
        password: {
            type: dataTypes.STRING(45)
        },
        admin: {
            type: dataTypes.TINYINT
        },
        active: {
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
        User.belongsToMany(models.Product, {
            as: "products",
            through: "user_product",
            foreignKey: "id_user",
            otherKey: "id_product",
            timestamps: false
        })
    }

    return User;

}