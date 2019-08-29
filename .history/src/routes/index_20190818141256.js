const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas
router.get('/',(req,res)=> {
    res.send('Index');
})
module.exports = router;

