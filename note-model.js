(function(exports) {

  let Note = function(text) {
    this.text = text
  };

  Note.prototype.notes = function(){
    return this.text
  };
  exports.newNote = Note;
})(this);

new newNote("some random text")

// Code is wrapped in the module pattern.
// Uses the constructor and prototype pattern to define a note model object that can be instantiated.
// Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
// Stores the text in a text property on the note.
// Has a method that will return the note text.
