const mongoose = require('mongoose');

const notesSchema = {
    title : String,
    content : String
}

const Note = mongoose.model("NoteDetails",notesSchema);

module.exports = Note;