const helpers = {}; //para comprobar si el usuario esta autenticado
// aca nos ahorramos toda la wea gracias al modulo 
helpers.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash('error_msg', 'Not Authorized.');
  res.redirect('/users/signin');
};

module.exports = helpers;