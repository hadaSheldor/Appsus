import { noteService } from "../services/note-service.js"
import noteText from "./note-text.cmp.js"
import noteTodo from "./note-todo.cmp.js"
import noteImage from "./note-image.cmp.js"
import noteVideo from "./note-video.cmp.js"
import noteDetails from './note-details.cmp.js'

export default {
    props: ['composeNote'],
    template: `
        <section class="notes-container">
            <section class="notes-list">
                <component v-for="note in notes" :is="note.type" :key= "note.id" :note="note" @noteClicked="action"></component>
            </section>
        </section>
        <note-details v-if="showNoteDetails" @cancel="closeModal" @save="updateNote" :note="selectedNote" /> 
`,
    components: {
        noteText,
        noteTodo,
        noteImage,
        noteVideo,
        noteDetails,
    },
    watch: {
        composeNote: function () {
            if (this.composeNote) {
                this.selectedNote = noteService.getEmptyNote()
                this.edit()
            }
        },
    },
    data() {
        return {
            notes: null,
            showNoteDetails: false,
            selectedNote: null,
        };
    },
    created() {
    },
    mounted() {
        this.getNotes()
    },
    methods: {
        getNotes() {
            noteService.query()
                .then(notes => {
                    this.notes = notes
                    this.notes = this.notes.sort((a, b) => (a.pin > b.pin) ? 1 : -1)
                })

        },
        action(action, currNote) {
            const func = this[action]
            if (func && typeof func === "function") {
                this.selectedNote = currNote
                func()
            }
        },
        pin() {
            this.selectedNote.pin = (this.selectedNote.pin === 'pin') ? 'unpin' : 'pin'
            noteService.put(this.selectedNote)
                .then(() => {
                    setTimeout(this.getNotes(), 6000)
                })
        },
        mail(){
            Swal.fire({
                title:'Send note to e-mail',
                text: 'Current module not implemented',
                timer: 3000,
            })
        },
        delete() {
            noteService.remove(this.selectedNote.id)
                .then(() => {
                    const idx = this.notes.findIndex((note) => note.id === this.selectedNote.id)
                    this.notes.splice(idx, 1);
                })
        },
        edit() {
            this.showNoteDetails = true
        },
        closeModal() {
            this.showNoteDetails = false
            this.$emit("composed")
            this.selectedNote = null
        },
        updateNote(note) {
            if(note.id){
                noteService.put(note)
                .then(() => {
                    this.resetModalParams()
                })
            }else{
                //New note was added
                noteService.post(note)
                .then(() => {
                    this.resetModalParams()
                    this.getNotes()
                })
            }
        },
        resetModalParams(){
            this.showNoteDetails = false
            this.$emit("composed")
        }
    },
    computed: {
    },
    unmounted() { },
};