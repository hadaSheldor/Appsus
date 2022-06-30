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
            <component v-for="note in notes" :is="note.type" :key= "note.id" :note="note" @noteClicked="action">
            </component>
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
       // this.getNotes()
    },
    mounted() {
        this.getNotes()
    },
    methods: {
        getNotes(){
            noteService.query()
            .then(notes => {
                this.notes = notes
                this.notes = this.notes.sort((a,b) => Number(b.isPinned) - Number(a.isPinned))
            })

        },
        action(action, currNote){          
            const func = this[action]
            if(func && typeof func === "function"){
                func(currNote)
            }
        },
        pin(currNote){
            currNote.isPinned = !currNote.isPinned 
            noteService.put(currNote)
            .then(() => {
                this.getNotes()
            })
            //unpined url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDR2N2wyIDN2MmgtNnY1bC0xIDEtMS0xdi01SDV2LTJsMi0zVjRjMC0xLjEuOS0yIDItMmg2YzEuMTEgMCAyIC44OSAyIDJ6TTkgNHY3Ljc1TDcuNSAxNGg5TDE1IDExLjc1VjRIOXoiLz4KPC9zdmc+Cg==)
            //pined url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+CiAgPHBhdGggZmlsbD0iIzAwMCIgZD0iTTE3IDRhMiAyIDAgMCAwLTItMkg5Yy0xLjEgMC0yIC45LTIgMnY3bC0yIDN2Mmg2djVsMSAxIDEtMXYtNWg2di0ybC0yLTNWNHoiLz4KPC9zdmc+Cg==)
        
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