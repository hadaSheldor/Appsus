import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note image">
             <h4>{{ note.title }}</h4>
             <img :src="note.info.url" >
             <note-buttons-panel :note='note'  />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {
        };
    },
    created() {
    },
    methods: {},
    computed: {

    },
    unmounted() { },
};