import { noteService } from "../services/note-service.js"

export default {
    props: ["note"],
    template: `
   <h1>Details</h1>
    <div class="modal-mask">
        <div class="modal-wrapper" @click="cancel">
            <div class="modal-container" @click.stop>
                <div class="modal-body">
                    <!-- <form @submit.prevent> -->
                        <input type="text" v-model="noteToEdit.info.title" placeholder="Title" />
                        <textarea v-model="noteToEdit.info.text" placeholder="Take a note..."></textarea> 

                        <div class="modal-footer">
                            <button @click="updateNote">Save</button>
                            <button @click="cancel">Cancel</button>  
                        </div>
                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
`,
    data() {
        return {
            noteToEdit: null,
            previousNote: null,
        };
    },
    created() {
        this.noteToEdit = this.note
        this.previousNote = JSON.parse(JSON.stringify(this.note))
    },
    mounted() {
    },
    methods: {
        cancel(){
            this.note.info.title = this.previousNote.info.title
            this.note.info.text = this.previousNote.info.text

            this.$emit('cancel')
        },
        updateNote(){
            this.$emit('save',this.noteToEdit)
        }
    },
    computed: {
    },
    unmounted() { },
};