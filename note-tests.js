
function testIsString(){
  let n = new newNote("Hello World")
  let t = n.text
  assert.isTrue(typeof t === 'string')
  assert.isTrue(n.text === "Hello World")
};
testIsString();

function testHasArray(){
  let noteBook = new newNoteBook
  let notes = noteBook.storage
  assert.isTrue(typeof notes === 'object')
};
testHasArray();

function teststoresNotesInArray(){
  let noteBook = new newNoteBook
  let note = "some random note to test"
  noteBook.saveNotes(note)
  let n = noteBook.storage
  assert.isTrue(n[0] === "some random note to test")
};
teststoresNotesInArray();

function testconverttoHTML(){
  let noteBook = new newNoteBook
  let note = new newNote("Some Random note")
  let note2 = new newNote("Another Random note")
  noteBook.saveNotes(note)
  noteBook.saveNotes(note2)

  n = "<ul><li><div>Some Random note</div></li><li><div>Another Random note</div></li></ul>"
  assert.isTrue(noteBook.converttoHTML() === n )
};
testconverttoHTML()

function testNoteController(){
  var fakeElement = document.createElement("div")
  fakeElement.id = "app"
  fakeElement.innerHTML = "string"
  var body = document.getElementsByTagName("body")
  body.item(0).appendChild(fakeElement)
  let controller = new NoteController(new newNoteBook)
  controller.saveNotes("controller test")
  controller.saveNotes("another controller test")
  let n = controller.insertion()

  assert.isTrue(fakeElement.innerHTML === "<ul><li><div>controller test</div></li><li><div>another controller test</div></li></ul>")

};
testNoteController()
