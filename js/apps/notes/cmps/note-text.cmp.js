import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
 props: ["note"],
 template: `
      <div v-if="note" class="note text">
          <h4>{{ note.text }}</h4>
          <note-buttons-panel :note='note'  />
      </div>
`,
components: {
    noteButtonsPanel
},
data() {
return {};
},
created() {},
methods: {},
computed: {},
unmounted() {},
};