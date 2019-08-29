const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost/node-notes-db', {
  useCreateIndex: true,
  useNewUrlParser: true                                //esto es para el funcionamiento de la biblioteca
})
  .then(db => console.log('DB is connected'))
  .catch(err => console.error(err));