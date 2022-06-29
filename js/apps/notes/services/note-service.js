'use strict'

import notesData from '../data/notes.json' assert {type: 'json'}
import { storageService } from '../../../services/async-storage-service.js'
import { utilService } from '../../../services/util.js'

const NOTES_KEY = 'notes'

export const noteService = {
    query//,
    // get,
    //remove,
    // save,
    // getEmptyBook,
}

_createNotes()

function _createNotes() {
    query()
    .then((notes) => {
        if (!notes || !notes.length) { //TODO ?
            notes = Object.assign({}, notesData)
            utilService.saveToStorage(NOTES_KEY, notes)
        }
    })

}

function query() {
    return storageService.query(NOTES_KEY)
}

