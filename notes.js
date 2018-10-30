const fs = require('fs')

const fetchNotes = () => {
	try {
		const notesString = fs.readFileSync('notes-data.json')
		return JSON.parse(notesString)
	} catch (e) {
		return []
	}
}

const saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

const addNote = (title,body) => {
	const notes = fetchNotes()
	const note = {title,body}

	const duplicateNotes = notes.filter( n => n.title === title)

	if (!duplicateNotes.length){
		notes.push(note)
		saveNotes(notes)
		return note
	} else {
		return false
	}
}

const getAll = () => {
	return fetchNotes()
}

const getNote = (title) => {
	const notes = fetchNotes() 
	const searchedNote = notes.filter(n => n.title === title)[0]
	if (searchedNote.title){
		return searchedNote
	} else {
		return false 
	}
}

const removeNote = (title) => {
	const notes = fetchNotes()
	const filteredNotes = notes.filter(n => n.title !== title)
	saveNotes(filteredNotes)

	if (notes.length === filteredNotes.length){
		return false
	} else {
		return true
	}
}



module.exports = {
	addNote,
	getAll,
	getNote,
	removeNote
}