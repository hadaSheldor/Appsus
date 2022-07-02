import noteButtonsPanel from './note-buttons-panel.cmp.js'

export default {
    props: ["note"],
    template: `
         <div v-if="note" class="note todo" :style="{ 'background-color': calcStyle }">
             <h4>TODO List: </h4><span>{{ note.info.title }}</span>
             <div><p>{{ note.info.text }}</p></div>
             <ol>
                <li v-for="item in note.info.todo" :style="{ 'text-decoration-line': calcItemStyle(item)}">{{ item.text}}</li>
             </ol>
             <note-buttons-panel :note = "note" @onButtonClicked="action" />
         </div>
   `,
    components: {
        noteButtonsPanel
    },
    data() {
        return {
            defaultColor: "#D4FE90",
        }
    },
    created() {
    },
    methods: {
        action(action, args){
            this.$emit('noteClicked', action, this.note, args)
        },
        calcItemStyle(item){
            return item.isChecked ? "line-through" : "none";
        }
    },
    computed: {
        calcStyle(){
            return this.note.style ? this.note.style : this.defaultColor
        },
    },
    unmounted() { },
};