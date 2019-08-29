const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');             //requiero el motor de plantillas
//initiliazations
const app = express();


//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));        // para decirle a node que mi carpeta views esta en src
app.engine('.hbs', exphbs ({                            //hbs==handlebars
defaultLayout:,                                         //estas propiedades nos siven para saber de que manera vamos a utilizar las vistas
layoutsDir: ,
partialsDir:, 
extname:
}                               

)    );                              
//midlewares 

//global variables

//Routes

//static files

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
  });