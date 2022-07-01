import { noteService } from "../services/note-service.js"
import noteText from "./note-text.cmp.js"
import noteTodo from "./note-todo.cmp.js"
import noteImage from "./note-image.cmp.js"
import noteVideo from "./note-video.cmp.js"

export default {
    template: `
        <section class="notes-container">
            <!-- <div class="new-note-container">
                <div>
                    <img =>
                    <input type="text" class="note-input" placeholder="Take a note...">
                <div>
            </div> -->
            <section class="notes-list">
                <component v-for="note in notes" :is="note.type" :key= "note.id" :note="note" @noteClicked="action">
                </component>
            </section>
        </section>
`,
    components: {
        noteText,
        noteTodo,
        noteImage,
        noteVideo
    },
    data() {
        return {
           notes: null,
        };
    },
    created() { 
    },
    mounted() {
        this.getNotes()
    },
    methods: {
        getNotes(){
            noteService.query()
            .then(notes => {
                this.notes = notes
                this.notes = this.notes.sort((a, b) => (a.pin > b.pin) ? 1 : -1)
            })

        },
        action(action, currNote){          
            const func = this[action]
            if(func && typeof func === "function"){
                func(currNote)
            }
        },
        pin(currNote){
            currNote.pin = (currNote.pin === 'pin') ? 'unpin' : 'pin' 
            noteService.put(currNote)
            .then(() => {
                setTimeout(this.getNotes(), 6000)
            })
        },
        delete(currNote){
            noteService.remove(currNote.id)          
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === currNote.id)
                this.notes.splice(idx, 1);
            })
        }
    },
    computed: {
    },
    unmounted() { },
};