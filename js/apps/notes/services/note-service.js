'use strict'

import notesData from '../data/notes.json' assert {type: 'json'}
import { storageService } from '../../../services/async-storage-service.js'

const NOTES_KEY = 'notes'

export const noteService = {
    query,
    get,
    remove,
    put,
    post,
    getEmptyNote
}

_createNotes()

function _createNotes() {
    query()
    .then((notes) => {
        if (!notes || !notes.length) { 
            notes = notesData
            storageService.postMany(NOTES_KEY, notes)
        }
    })
}

function query() {
    return storageService.query(NOTES_KEY)
}

function remove(noteId) {
    return storageService.remove(NOTES_KEY, noteId)
}

function post(newNote){
    return storageService.post(NOTES_KEY, newNote)
}

function put(currNote){
    return storageService.put(NOTES_KEY, currNote)
}

function get(noteId){
    return storageService.get(NOTES_KEY, noteId)
}

function getEmptyNote(){
    return   {
        id: "",
        type: "noteText",
        pin: "unpin",
        style: {},
        info: {
            title: "",
            text: "Take a note...",
            url: "",
            todo: []
        } 
      }
}

