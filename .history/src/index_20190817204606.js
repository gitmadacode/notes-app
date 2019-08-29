const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');             //requiero el motor de plantillas
const methodOverride = require('method-override');
//initiliazations
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));        // para decirle a node que mi carpeta views esta en src
app.engine('.hbs', exphbs ({                           //hbs==handlebars , es un html mejorado
defaultLayout: 'main',                                 //estas propiedades nos siven para saber de que manera vamos a utilizar las vistas
layoutsDir: path.join(app.get('views'), 'layouts'),    //obten la direccion de la carpeta views y concatelano con layouts
partialsDir: path.join(app.get('views', 'partials')),  //partial son pequeñas partes de html que podemos reutilizar en cualquier vista (ejemplo:Formulario de contacto)
extname: '.hbs'                                        //sirve para colocar que extension van a tener nuestros archivos
}));                                                   //con esto hemos terminado la configuración   
app.set('view engine' , '.hbs');                       //para configurar nuestro motor de plantillas                      
//Midlewares 
app.use(express.urlencoded({extended: false}));       //sirve para cuando un formulario quiera enviarme un dato yo pueda entenderlo, el false es por que solo datos , no iamgenes
app.use(methodOverride());
//global variables

//Routes

//static files

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });