const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true                                //esto es para el funcionamiento de la biblioteca
})
  .then(db => console.log('La base de datos MONGODB esta conectada'))
  .catch(err => console.error(err));