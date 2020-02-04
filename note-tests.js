
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
  let notesArray = []
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