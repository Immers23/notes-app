(function(exports) {

  let Note = function(text) {
    this.text = text
  };
  let NoteBook = function() {
    this.storage = []
  };

  NoteBook.prototype.saveNotes = function(notes){ this.storage.push(notes) }
  NoteBook.prototype.converttoHTML = function(){
    console.log(this.storage)
    let el = this.storage.map(function(val){return val.text})
    let a = el.join("</div></li><li><div>")
    return `<ul><li><div>${a}</div></li></ul>`
  }
  
  Note.prototype.notes = function(){ return this.text }
  
  exports.newNote = Note
  exports.newNoteBook = NoteBook

})(this);

new newNoteBook
new newNote("some random text")



// Code is in a file called note-model.js.
// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.
// Has a method that will return the note text.
