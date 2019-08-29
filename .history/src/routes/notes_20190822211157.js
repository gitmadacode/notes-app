
const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

const Note = require('../models/Note'); //yo voy a poder insertar actualizar o deletear un dato 

router.get('/notes/add', (req, res) => {
res.render('notes/new-note');
});

router.post('/notes/new-note', async (req, res) => {  //async le dice a la funcion que abra procesos asyncronos
const {title, description} = req.body;
const errors = [];
if(!title) {
    errors.push({text : 'inserta titulo'});
}
if(!description){
    errors.push({text: 'inserta descrip'});
}
if(errors.length > 0){
    res.render('notes/new-note',{
        errors,
        title,
        description
    });
}else{
    const newNote =  new Note({title,description});  //con esto estoy creando un nuevo dato
    await newNote.save(); //con esto la nota se va guarda en la base de datos mongo, await agregado para que sea asincrono
    res.redirect('/notes'); //cuando termine de guardar , voy a redireccionarlo a esta ruta , con la lista de los datos guardados
}});
    


router.get('/notes', (req,res) => {
   res.send('notes from database'); 
});

module.exports = router;
