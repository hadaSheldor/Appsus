import { noteService } from "../services/note-service.js"
import noteText from "./note-text.cmp.js"
import noteTodo from "./note-todo.cmp.js"
import noteImage from "./note-image.cmp.js"
import noteVideo from "./note-video.cmp.js"

export default {
    template: `
        <section class="notes-container">
            <div class="new-note-container">
                <input type="text" class="note-input">
            </div>
            <div class="note-card" v-for="note in notes" >
                <component :is="note.type" :key= "note.id" :note="note" @noteClicked="action">
                </component>
            </div>
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
        noteService.query().then(notes => this.notes = notes)
    },
    mounted() {
    },
    methods: {
        action(action, noteId){          
            const func = this[action]
            if(func && typeof func === "function"){
                func(noteId)
            }
        },
        delete(noteId){
            noteService.remove(noteId)          
            .then(() => {
                const idx = this.notes.findIndex((note) => note.id === noteId)
                this.notes.splice(idx, 1);
            })
        }
    },
    computed: {
    },
    unmounted() { },
};