import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note todo">
             <h4>Note Details</h4>
             <p><h1>Title:</h1><span>{{note.info.title}}</span></p>
             <p><h2>Type:</h2><span>{{note.type}}</span></p>
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