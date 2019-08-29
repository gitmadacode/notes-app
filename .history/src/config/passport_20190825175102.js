//este archivo utilizara el modulo passport, para autenticar el usuario 
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const mongoose = require('mongoose');
const User = require('../models/User');  //para llamar a la bd y ver los datos de usuarios

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  // Match Email's User