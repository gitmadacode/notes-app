const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas


router.get('/users/signin',(req,res)=>{
    res.render('users/signin');
});

router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
});

router.post('/users/signup', (req,res)=>{  //aca llegaran los datos del form de registro
    const {name,email,password,confirm_password} = req.body;
    const errors = [];
    if(password != confirm_password) {                   //si el password es diferente
        errors.push({text : 'Password do not mach'});
    }
    if(password.length < 4){
        errors.push({text : 'Password need more of 4 letters'});
    }
    if(errors.length > 0){
        res.render('users/signup', {errors,name,email,password,confirm_password});
    }
    res.send('ok');
});


module.exports = router;
