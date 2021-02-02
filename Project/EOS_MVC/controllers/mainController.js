const { mainModule } = require("process");

const indexController = {
    index: function(req,res){
        return res.render ('index');
    },
    detalle: function(req,res){
        return res.render ('detalleMenu');
    },
}

module.exports = indexController;