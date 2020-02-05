
function testIsString(){
  let n = new Note("Hello World")
  let t = n.text
  assert.isTrue(typeof t === 'string')
  assert.isTrue(n.text === "Hello World")
};
testIsString();

function testHasArray(){
  let noteBook = new NoteBook
  let notes = noteBook.storage
  assert.isTrue(typeof notes === 'object')
};
testHasArray();

function teststoresNotesInArray(){
  let noteBook = new NoteBook
  let note = "some random note to test"
  noteBook.saveNotes(note)
  let n = noteBook.storage
  assert.isTrue(n[0] === "some random note to test")
};
teststoresNotesInArray();

function testconverttoHTML(){
  let noteBook = new NoteBook
  let note = new Note("Some Random note that is way over 20 charecters")
  let note2 = new Note("Another Random note that is also way over 20 charecters")
  noteBook.saveNotes(note)
  noteBook.saveNotes(note2)

  n = "<ul><li><div>Some Random note tha</div></li><li><div>Another Random note </div></li></ul>"
  assert.isTrue(noteBook.converttoHTML() === n )
};
testconverttoHTML()

function testNoteController(){
  var fakeElement = document.createElement("div")
  fakeElement.id = "app"
  fakeElement.innerHTML = "string"
  var body = document.getElementsByTagName("body")
  body.item(0).appendChild(fakeElement)
  let controller = new NoteController(new NoteBook)
  controller.saveNotes("controller test")
  controller.saveNotes("another controller test")
  let n = controller.insertion()

  assert.isTrue(fakeElement.innerHTML === "<ul><li><div>controller test</div></li><li><div>another controller t</div></li></ul>")

};
testNoteController()

function testSingleNoteView() {
  let note = new Note("string")
  let singleNoteView = new SingleNoteView(note)
  assert.isTrue(singleNoteView.noteHTML() === `<div>${note.notes()}</div>`)

}
testSingleNoteView()
