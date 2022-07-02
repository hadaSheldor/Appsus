import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note video" :style="{ 'background-color': calcStyle }">
            <h4>{{ note.info.title }}</h4>
            <div><p>{{ note.info.text }}</p></div>
            <video controls="controls" preload="auto">
                <source :src="note.info.url" type="video/mp4">
            </video> 
            <note-buttons-panel :note = "note" @onButtonClicked="action" />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {
            defaultColor: "#D2AFFB",
        }
    },
    created() { },
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