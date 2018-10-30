// const obj = {
// 	name: 'penny'
// }

// const stringObj = JSON.stringify(obj)
// console.log(typeof stringObj)
// console.log(stringObj)

// const personString = '{"name": "penny", "age": "1"}'
// const personObj = JSON.parse(personString)

// console.log(typeof personObj)
// console.log(personObj)

const fs = require('fs')
const originalNote = {
	title: 'someTitle',
	body: 'someBody'
}

const originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('notes.json', originalNoteString)

const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note)