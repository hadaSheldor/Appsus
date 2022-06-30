export default {
    template: `
        <div class="note-buttons-panel" >
            <button @click="onPin">Pin</button>
            <button @click="onColorChange">Change Color</button>
            <!-- <button @click="onMail">Mail</button> -->
            <button @click="onEdit">Edit</button>
            <button @click="onDelete">Delete</button>
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
    computed: {},
    unmounted() { },
};