import sideNavBar from "./side-nav-bar.cmp.js"
import notesContainer from "./notes-container.cmp.js"

export default {
    props: ["notes"],
    template: `
            <section class="notes-main-container">
                <side-nav-bar />
                <notes-container :notes="notes" />
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