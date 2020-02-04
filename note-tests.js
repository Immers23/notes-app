let n = new newNote("Hello World")
let t = n.text

assert.isTrue(typeof t === 'string')
assert.isTrue(n.text === "Hello World")
