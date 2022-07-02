import { noteService } from "../services/note-service.js"

export default {
    props: ["note"],
    template: `
    <div class="note-details-background">
        <div class="note-details-location" @click="cancel">
            <div class="note-details-container" @click.stop>
                <div class="note-details-body">
                    <input type="text" v-model="noteToEdit.info.title" placeholder="Title" />
                    <textarea v-model="noteToEdit.info.text"></textarea> 
                    <div v-if="note.type==='noteImage'" class="note-details-img-area">
                        <img :src="note.info.url">
                    </div>
                    <div v-else-if="note.type==='noteVideo'" class="note-details-video-area">
                        <video controls="controls" preload="auto">
                            <source :src="note.info.url" type="video/mp4">
                        </video> 
                    </div>
                </div>
                <div class="note-details-footer">
                    <button @click="updateNote">Save</button>
                    <button @click="cancel">Cancel</button>  
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