
const express = require('express');
const router = express.Router();
//me permite ejecutar un meteodo, que me facilita la creacion de rutas

const Note = require('../models/Note'); //yo voy a poder insertar actualizar o deletear un dato 
const { isAuthenticated } = require('../helpers/auth');//para autenticar que el usuario logeo

router.get('/notes/add', isAuthenticated ,(req, res) => {  //aca pusimos authenticated y en las otras igual para verificar antes de procesar
res.render('notes/new-note');
});

router.post('/notes/new-note',isAuthenticated, async (req, res) => {  //async le dice a la funcion que abra procesos asyncronos
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
    req.flash('success_msg', 'Note added succefully');
    res.redirect('/notes'); //cuando termine de guardar , voy a redireccionarlo a esta ruta , con la lista de los datos guardados
}});
    


router.get('/notes', async (req,res) => {  //async por que buscar tambien es un proceso asincrono
    const notes = await Note.find().sort({date: 'desc'}); //desde la coleccion note quiero buscar todos los datos,sort es para que se ordenen segun yo quiera
    res.render('notes/all-notes',{notes});                                //voy a retornarlos a una vista
});
//lo siguiente es para editar las notas
router.get('/notes/edit/:id', async (req, res)=>{
    const note = await Note.findById(req.params.id);
    res.render('notes/edit-note', {note});
});
// con lo siguiente estamos actualizando el dato
router.put('/notes/edit-note/:id',async (req,res)=>{
    const {title,description} = req.body;
    await Note.findByIdAndUpdate(req.params.id, {title,description});
    req.flash('success_msg','Note updated successfuly');
    res.redirect('/notes');                                                               //con esto redirecccionamos a las notas anteriores
});
//con lo siguiente eliminaremos una nota tomando el id
router.delete('/notes/delete/:id', async (req,res)=>{                                //con esto remuevo el id de la bd
    await Note.findByIdAndDelete(req.params.id); 
    req.flash('success_msg','Note deleted successfuly');                                                       
    res.redirect('/notes');              //luego de borrar redirecciono
});
module.exports = router;
