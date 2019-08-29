const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

router.get('/notes/add',(req,res)=>{
    res.render('notes/new-note') //cuando aprete rendererizame alli
});

router.post('/notes/new-note',(req,res)=>{
    console.log(req.body)
}); //cuando el formulario me envie una peticion post yo voy a tratar de recibirlo en.. 





router.get('/notes', (req,res) => {
    res.send('Notes from database');
});




module.exports = router;
