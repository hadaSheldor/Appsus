export default {
    props: ["note"],
    template: `
        <div class="note-buttons-panel"> 
            <div>    
                <button class="note-button" @click="onPin" :class="note.pin"></button>
            </div>
            <div class="note-edit-buttons-panel"> 
                <button class="note-button" @click="onColorChange" title="Background options" class="color"></button>
                <button class="note-button" @click="onMail"  title="Send to mail" class="mail"></button> 
                <button class="note-button" @click="onEdit" title="Edit" class="edit"></button>
                <button class="note-button" @click="onDelete" title="Delete" class="delete"></button>
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

        onColorChange(){
            this.onClick('changeColor')
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

        onClick(value){
            this.$emit('onButtonClicked', value)
        },
    },
    computed: {
    },
    unmounted() { },
};