import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
 props: ["note"],
 template: `
      <div v-if="note" class="note text">
          <div><h4>{{ note.text }}</h4></div>
          <note-buttons-panel @onButtonClicked="action" />
      </div>
`,
components: {
    noteButtonsPanel
},
data() {
    return {};
},
created() {},
methods: {
    action(action){
        this.$emit('noteClicked', action, this.note)
    }
},
computed: {},
unmounted() {},
};