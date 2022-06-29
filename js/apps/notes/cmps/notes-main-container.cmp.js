import sideNavBar from "./side-nav-bar.cmp.js"
import notesContainer from "./notes-container.cmp.js"

export default {
    template: `
            <section class="notes-main-container">
                <side-nav-bar />
                <notes-container />
            </section>
    `,
    components:{
        sideNavBar,
        notesContainer
    },
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};