export default {
    template: `
            <section class="notes-main-container">

                <section class="side-nav-bar">
                <div class="menu-item notes">Notes</div>
                <div class="menu-item reminders">Reminders</div>
                <div class="menu-item lable">Lable</div>
                <div class="menu-item edit-lable">Edit labels</div>
                <div class="menu-item archive">Archive</div>
                <div class="menu-item trash">
                    <img src="../../../../img/trash-can50.png">
                    Trash
                </div>
                </section>

                <section class="notes-container">

                </section>

            </section>
    `,
    data() {
        return {};
    },
    created() { },
    methods: {},
    computed: {},
    unmounted() { },
};