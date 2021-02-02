const mainController = {
    index: function(req,res){
        return res.render ('index');
    },
   
    login: function(req,res){
        return res.render ('login');
    },

    productCart: function(req,res){
        return res.render ('productCart');
    },

    productDetail: function(req,res){
        return res.render ('ProductDetail');
    },

    register: function(req,res){
        return res.render ('register');
    }

}

module.exports = mainController;