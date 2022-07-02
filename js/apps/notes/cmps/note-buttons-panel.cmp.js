export default {
    props: ["note"],
    template: `
        <div class="note-buttons-panel"> 
            <div>    
                <button @click="onPin" :class="note.pin"></button>
            </div>
            <div class="note-edit-buttons-panel"> 
                <button @click="onColorChange" title="Background options" class="color"></button>
                <button @click="onMail"  title="Send to mail" class="mail"></button> 
                <button @click="onEdit" title="Edit" class="edit"></button>
                <button @click="onDelete" title="Delete" class="delete"></button>
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