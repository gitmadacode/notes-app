
const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

router.get('/notes/add', (req, res) => {
res.render('notes/new-note');
});

router.post('/notes/new-note', (req, res) => {
    console.log(JSON.stringify);
    res.send('ok');
})

router.get('/notes', (req,res) => {
   res.send('notes from database'); 
});

module.exports = router;
