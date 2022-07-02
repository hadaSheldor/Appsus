export default {
    props: ["note"],
    template: `
        <div class="note-buttons-panel"> 
            <div>    
                <button class="note-button" @click="onPin" :class="note.pin"></button>
            </div>
            <div class="note-edit-buttons-panel"> 
                <div class="note-button color"> 
                    <input type="color" title="Background options" @input="onColorChange($event)" />
                </div>
                <button class="note-button mail" @click="onMail"  title="Send to mail"></button> 
                <button class="note-button edit" @click="onEdit" title="Edit"></button>
                <button class="note-button delete" @click="onDelete" title="Delete"></button>
            </div>
        </div>
`,
    components: {
    },
    data() {
        return {
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        onPin(){
            this.onClick('pin')
        },

        onColorChange(ev){
            this.onClick('changeColor', ev.target.value)
        },

        onMail(){
            this.onClick('mail')
        },

        onEdit(){
            this.onClick('edit')
        },

        onDelete(){
            this.onClick('delete')
        },

        onClick(action, args = ''){
            this.$emit('onButtonClicked', action, args)
        },
    },
    computed: {
    },
    unmounted() { },
};