const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');             //requiero el motor de plantillas
const methodOverride = require('method-override');
const session = require('express-session');            //manera de guardar los datos de los usuarios
const flash = require('connect-flash'); //esto es para enviar mensajes
const passport = require('passport');  //esto es para validar el login
//initiliazations
const app = express();
require('./database');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));        // para decirle a node que mi carpeta views esta en src
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  layoutsDir: path.join(app.get('views'), 'layouts'),
  partialsDir: path.join(app.get('views'), 'partials'),
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
          
//Midlewares 
app.use(express.urlencoded({extended: false}));       //sirve para cuando un formulario quiera enviarme un dato yo pueda entenderlo, el false es por que solo datos , no iamgenes
app.use(methodOverride('_method'));                    //nos sirve para que los formularios puedan enviar otros tipos de metodos , put delete
app.use(session({
  secret: 'mysecretapp',
  resave: true,                                        //nos van a permitir autenticar el usuario y almacenar esos datos temporalmente
  saveUninitialized: true,
}));


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//global variables
app.use((req, res, next)=>{
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

//Routes
app.use(require('./routes/index')); //hacerle saber a mi servidor que aqui estan mis rutas
app.use(require('./routes/notes'));
app.use(require('./routes/users'));

//static files
app.use(express.static(path.join(__dirname, 'public'))); //con esto digo "ey la carpeta public esta aqui"

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });