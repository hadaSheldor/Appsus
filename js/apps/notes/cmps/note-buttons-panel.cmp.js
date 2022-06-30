export default {
    props: ["note"],
    template: `
        <div v-if="note" class="note-buttons-panel" >
            <button @click="$emit('close')">Pin</button>
            <button @click="$emit('close')">Change Color</button>
            <button @click="$emit('close')">Mail</button>
            <button @click="$emit('close')">Edit</button>
            <button @click="$emit('close')">Delete</button>
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

    },
    computed: {},
    unmounted() { },
};