
const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

router.get('/notes/add', (req, res) => {
    res.render('notes/new-note'); 
});

router.post('/notes/new-note' , (req, res) => {
    console.log(req.body);
    req.send('ok');
}); //cuando el formulario me envie una peticion post yo voy a tratar de recibirlo en.. 





router.get('/notes', (req,res) => {
    res.send('Notes from database');
});




module.exports = router;
