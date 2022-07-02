import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
      <div v-if="note" class="note text" :style="{ 'background-color': calcStyle }">
          <div><h4>{{ note.info.title }}</h4></div>
          <div><p>{{ note.info.text }}</p></div>
          <note-buttons-panel :note = "note"  @onButtonClicked="action" />
      </div>
`,
    components: {
        noteButtonsPanel
    },
    data() {
        return {
            defaultColor: "#F0BB10",
        }
    },
    created() { },
    mounted() { },
    methods: {
        action(action, args) {
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
