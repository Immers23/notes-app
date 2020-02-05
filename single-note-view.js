(function (exports) {
function SingleNoteView(note){
  this.note = note
}

SingleNoteView.prototype.noteHTML = function () { return `<div>${this.note.notes()}</div>`}

exports.SingleNoteView = SingleNoteView
})(this)
