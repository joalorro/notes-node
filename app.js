//Third-party modules
const fs = require('fs')
const _ = require('lodash')
const yargs = require('yargs')
//relative files 
const notes = require('./notes')

const options = {
	title: {
		describe: 'Title of note',
		demand: true,
		alias: 't'
	},
	body: {
		describe: 'Provide a body of the note',
		demand: true,
		alias: 'b'
	}
}

const argv = yargs
	.command('add','Add a new note', {
		title: options.title,
		body: options.body
	})
	.command('list', 'List all notes')
	.command('read', 'Read a note', {
		title: options.title
	})
	.command('remove', 'Remove a note', {
		title: options.title
	})
	.help()
	.argv


const command = argv._[0]

let note 

const readNoteDetails = (note) => {
	debugger
	console.log('-----------------')
	console.log('Title:', note.title)
	console.log('Body:', note.body)
	console.log('-----------------')
}

const processCommand = (command) => {
	switch (command) {
		case "add":
			note = notes.addNote(argv.title, argv.body)
			if (note){
				readNoteDetails(note)
			} else {
				console.log('Note not created')
			}
			break
		case "list":
			let allNotes = notes.getAll()
			allNotes.forEach(n => {
				readNoteDetails(n)
			})
			break
		case "read":
			note = notes.getNote(argv.title)
			if (note){
				readNoteDetails(note)
			} else {
				console.log('Note not found')
			}
			break
		case "remove":
			notes.removeNote(argv.title) ? console.log('Note removed') : console.log('Note not removed')
			break
		case "beef":
			console.log('I SMELL LIKE BEEEEEEEEEF')
			break
		default: 
			console.log('command not found')
	}
}

processCommand(command)