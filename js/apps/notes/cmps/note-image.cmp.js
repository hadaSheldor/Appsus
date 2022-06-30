import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note image">
             <div><h4>{{ note.title }}</h4></div>
             <img :src="note.info.url" >
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
    computed: {

    },
    unmounted() { },
};