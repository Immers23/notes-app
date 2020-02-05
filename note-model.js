(function(exports) {

  let Note = function(text) {
    this.text = text
  };
  let NoteBook = function() {
    this.storage = []
  };

  NoteBook.prototype.saveNotes = function(notes){ this.storage.push(notes) }

  NoteBook.prototype.converttoHTML = function(){
    let summaryNote = []
    let el = this.storage.map(function(val){return val.text})
    for (i = 0; i < el.length; i++) { el[i].slice(0, 20)
         summaryNote.push(el[i].slice(0, 20))}

    let a = summaryNote.join("</div></li><li><div>")

    return `<ul><li><div>${a}</div></li></ul>`
  }

  Note.prototype.notes = function(){ return this.text }

  exports.Note = Note
  exports.NoteBook = NoteBook

})(this);
