import { noteService } from "../services/note-service.js"
import notesMainContainer from "../cmps/notes-main-container.cmp.js"

export default {
    template: `
            <notes-main-container :notes="notesToDisplay" />
    `,
    components:{
        notesMainContainer
    },
    data() {
        return {
            notes: null,
        };
    },
    created() { 
        noteService.query().then(notes => this.notes = notes)
    },
    methods: {},
    computed: {
        notesToDisplay(){
            return this.notes
        }
    },
    unmounted() { },
};