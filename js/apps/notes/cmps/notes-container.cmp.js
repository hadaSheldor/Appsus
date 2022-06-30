import noteText from "./note-text.cmp.js"
import noteTodo from "./note-todo.cmp.js"
import noteImage from "./note-image.cmp.js"
import noteVideo from "./note-video.cmp.js"

export default {
    props: ["notes"],
    template: `
        <section class="notes-container">
            <div class="new-note-container">
                <input type="text" class="note-input">
            </div>
            <div class="note-card" v-for="note in notes" :key="note.id" @click="select(note)">
                <note-text v-if="note.type === 'text'" :note="note"/>
                <note-image v-else-if="note.type === 'image'" :note="note"/>
                <!-- <note-todo i-else-if="note.type === 'todo'" :note="note"/>  -->
                <note-video v-else-if="note.type === 'video'" :note="note"/>  


                <!-- <button @click="$emit('close')">Pin</button>
                <button @click="$emit('close')">Change Color</button>
                <button @click="$emit('close')">Mail</button>
                <button @click="$emit('close')">Edit</button>
                <button @click="$emit('close')">Delete</button> -->
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
        };
    },
    created() { 
    },
    mounted() {
    },
    methods: {

    },
    computed: {},
    unmounted() { },
};