import noteDetails from "./note-details.cmp.js"

export default {
    props: ["notes"],
    template: `
        <section class="notes-container">
            <div v-for="note in notes" :key="note.id" @click="select(note)">
                <note-details :note="note"/>
            </div>
        </section>
`,
    components: {
        noteDetails
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};