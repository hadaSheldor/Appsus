import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note video">
             <h4>Video note</h4>
             <!-- <video  controls>
             <source :src="note.info.url">
            </video> -->
            <iframe width="420" height="315"
                    src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
            </iframe>
            <note-buttons-panel :note='note' />
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