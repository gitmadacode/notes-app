const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas
const passport = require('passport');
const User = require('../models/User');  //llamo al schema de datos de models

router.get('/users/signin',(req,res)=>{
    res.render('users/signin');
});

router.post('/users/signin', passport.authenticate('local', {
    successRedirect: '/notes',
    failureRedirect: '/users/signin',
    failureFlash: true
}));



router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
});

router.post('/users/signup', async(req,res)=>{  //aca llegaran los datos del form de registro
    const {name,email,password,confirm_password} = req.body;
    const errors = [];
    if(name.length <=0){
        errors.push({text : 'Please insert your name'});
    }
    if(password != confirm_password) {                   //si el password es diferente
        errors.push({text : 'Password do not mach'});
    }
    if(password.length < 4){
        errors.push({text : 'Password need more of 4 letters'});
    }
    if(errors.length > 0){
        res.render('users/signup', {errors,name,email,password,confirm_password});
    }else{
        const emailUser = await User.findOne({email: email});  //para ver si hay un email ya registrado de antes
        if(emailUser){
            req.flash('error_msg','The email is already in use');
            res.redirect('/users/signup');
        }
        const newUser = new User({name,email,password});         //voy a crear un nuevo usuario con estos datos
        newUser.password = await newUser.encryptPassword(password); //reeemplazo password por la contra cifrada
        await newUser.save();
        req.flash('success_msg','You are registered');
        res.redirect('/users/signin');

    }
    
});

router.get('/users/logout', (req,res)=>{
    req.logOut();
    res.redirect('/');
});
module.exports = router;
