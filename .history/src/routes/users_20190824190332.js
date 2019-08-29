const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas


router.get('/users/signin',(req,res)=>{
    res.render('users/signin');
});

router.get('/users/signup', (req,res)=>{
    res.render('users/signup');
});

router.post('/users/signup')


module.exports = router;
