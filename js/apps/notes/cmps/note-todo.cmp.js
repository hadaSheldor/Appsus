import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note todo">
             <h4>TODO List: </h4><span>{{ note.info.title }}</span>
             <note-buttons-panel @onButtonClicked="action" />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {};
    },
    created() {
    },
    methods: {
        action(action){
            this.$emit('noteClicked', action, this.note)
        }
    },
    computed: {},
    unmounted() { },
};