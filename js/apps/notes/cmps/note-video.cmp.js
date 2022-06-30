import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note video">
            <h4>Video note</h4>
            <video controls="controls" preload="auto">
                <source :src="note.info.url" type="video/mp4">
            </video> 
            <note-buttons-panel @onButtonClicked="action" />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {};
    },
    created() { },
    methods: {
        action(action){
            this.$emit('noteClicked', action, this.note.id)
        }
    },
    computed: {},
    unmounted() { },
};