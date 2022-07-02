import sideNavBar from "../cmps/side-nav-bar.cmp.js"
import notesContainer from "../cmps/notes-container.cmp.js"

export default {
    template: `
        <section class="main-container">
            <side-nav-bar  @onMenuItemClicked="menuItemClicked" />
            <notes-container :composeNote="createNewNote" @composed="messageComposed" />
        </section>
    `,
    components:{
        sideNavBar,
        notesContainer
    },
    data() {
        return {
            createNewNote: false,
        };
    },
    created() { 
    },
    methods: {
        menuItemClicked(){
            this.createNewNote = true
        },
        messageComposed(){
            this.createNewNote = false
            console.log('createNewNote is FALSE')
        }
    },
    computed: {
    },
    unmounted() { },
};