function userLoggedMiddleware(req,res,next){
    res.locals.isLogged == false;
    res.locals.isAdminLogged == false;

    if(req.session.userLogged){
      
        res.locals.isLogged= true;
    }

    if(req.session.adminLogged){
      
        res.locals.isAdminLogged= true;
    }

    next();
}

module.exports = userLoggedMiddleware;