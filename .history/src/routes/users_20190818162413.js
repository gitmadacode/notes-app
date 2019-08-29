const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas


router.get('/signin',(req,res)=>{
    res.send('Ingresando a la APP')
});




module.exports = router;
