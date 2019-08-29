const express = require('express');
//initilizations
const app = express;

//settings
app.set('port',process.env.PORT || 3000)
//midlewares

//global variables

//Routes

//static files

//server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
