
(function(exports) {

function NoteController (noteBook){
  this.noteBook = noteBook
}

NoteController.prototype.saveNotes = function(text){

  this.noteBook.saveNotes(new newNote(text))
}

NoteController.prototype.insertion = function(){
  var element = document.getElementById("app");
  element.innerHTML = this.noteBook.converttoHTML();
}
exports.NoteController = NoteController

})(this)

var controller = new NoteController(new newNoteBook)
controller.saveNotes("controller test")
controller.saveNotes("another controller test")
// controller.insertion()
