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

});


module.exports = router;
