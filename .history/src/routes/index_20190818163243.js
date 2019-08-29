const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas
router.get('/',(req,res)=> {//al visitar la pagina inicial devuelve el mensaje index
    res.send('Index');
});

router.get('/about',(req,res)=> {//al visitar la pagina inicial devuelve el mensaje about
    res.send('about');
}); 
module.exports = router;

