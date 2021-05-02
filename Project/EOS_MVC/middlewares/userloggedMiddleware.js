const tablaJson = require("../data/jsonManager");
const usersJson = tablaJson("users");

function userLoggedMiddleware(req,res,next){
    res.locals.isLogged == false;
    res.locals.isAdminLogged == false;
   
    let cookieEmail = req.cookies.userEmail;
    let userFromCookie = usersJson.findByField("email",cookieEmail);
    
    if(userFromCookie){
        req.session.userLogged = userFromCookie;
    }
    
    if(req.session.userLogged){
      
        res.locals.isLogged= true;
    }

    if(req.session.adminLogged){
      
        res.locals.isAdminLogged= true;
    }

    next();
}

module.exports = userLoggedMiddleware;