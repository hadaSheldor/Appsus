import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note image" :style="{ 'background-color': calcStyle }">
             <div><h3>{{ note.info.title }}</h3></div>
             <div><p>{{ note.info.text }}</p></div>
             <img :src="note.info.url">
             <note-buttons-panel :note = "note" @onButtonClicked="action" />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {
            defaultColor: "#E48B83",
        }
    },
    created() {
    },
    methods: {
        action(action, args){
            this.$emit('noteClicked', action, this.note, args)
        }
    },
    computed: {
        calcStyle(){
            return this.note.style ? this.note.style : this.defaultColor
        },
    },
    unmounted() { },
};