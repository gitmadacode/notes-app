//este archivo utilizara el modulo passport, para autenticar el usuario 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User');  //para llamar a la bd y ver los datos de usuarios

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  // Match Email's User
  const user = await User.findOne({email: email});
  if (!user) {
    return done(null, false, { message: 'Not User found.' });
  } else {
    // Match Password's User
    const match = await user.matchPassword(password);
    if(match) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Incorrect Password.' });
    }
  }

}));
//esto para que se guarde su sesion , para que evite logearse muchas veces, si el usuario se logea se guarda
passport.serializeUser((user, done) => {
    done(null, user.id);
  });

//si hay un usuario en la sesion
  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });