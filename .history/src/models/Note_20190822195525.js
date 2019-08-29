const mongoose = require('mongoose');
const { Schema } = mongoose;
//esta wea es como la tabla de bd de nota
const NoteSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Note', NoteSchema);