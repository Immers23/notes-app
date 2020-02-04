
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
console.log(notes)
console.log(notesArray)

assert.isTrue(typeof notes === 'object')
};
testHasArray();

function storesNotesInArray(){
  let noteBook = new newNoteBook
  let note = "some random note to test"
  noteBook.saveNotes(note)
  let n = noteBook.storage

  console.log(n)
  assert.isTrue(n[0] === "some random note to test")
};
storesNotesInArray();
