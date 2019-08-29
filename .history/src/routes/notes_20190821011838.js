
const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note'); 
});

router.post('notes/new-note', (require,response) =>{
console.log(req.body);
res.send('ok');
});




router.get('/notes', (req,res) => {
    res.send('Notes from database');
});




module.exports = router;
