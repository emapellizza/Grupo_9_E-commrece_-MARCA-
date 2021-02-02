const { mainModule } = require("process");

const mainController = {
    index: function(req,res){
        return res.render ('index');
    },
    /*detalle: function(req,res){
        return res.render ('detalleMenu');
    },*/
}

module.exports = mainController;