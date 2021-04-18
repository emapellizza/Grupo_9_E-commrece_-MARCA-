function guestMiddleware(req,res,next){
    if (req.session.userLogged || req.session.adminLogged){
        return res.redirect("/users/profile")
    }
    next();
}

module.exports = guestMiddleware;