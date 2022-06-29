import noteItem from "./note.cmp.js"

export default {
    props: ["notes"],
    template: `
        <section class="notes-container">
            <ul>   
                <li v-for="note in notes" :key="note.id"> 
                    <note-item :note="note" />
                </li>
            </ul>
        </section>
`,
    components: {
        noteItem
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};