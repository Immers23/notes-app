(function(exports) {

  let Note = function(text) {
    this.text = text
  };
  let NoteBook = function() {
    this.storage = []
  };

  NoteBook.prototype.saveNotes = function(notes){ this.storage.push(notes) }
  NoteBook.prototype.converttoHTML = function(){
    let el = this.storage.map(function(val){return val.text})
    let a = el.join("</div></li><li><div>")
    return `<ul><li><div>${a}</div></li></ul>`
  }

  Note.prototype.notes = function(){ return this.text }
  
  exports.newNote = Note
  exports.newNoteBook = NoteBook

})(this);


