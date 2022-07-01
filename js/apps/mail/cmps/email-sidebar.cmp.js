export default {
  template: `
    <section class="email-sidebar-container">
        <div class="compose-btn">
            <button>Compose</button>
        </div>
        <div>
            <div @click="onFilterByFolder('inbox')" v-model="filterByFolder.inbox" class="email-sidebar-btn inbox">
                <img src="../../../img/mail_draft_black_20dp.png" alt="inbox">
                <router-link to="/email/inbox">Inbox</router-link>
            </div>
            <div @click="onFilterByFolder('sent')" class="email-sidebar-btn sent">
                <img src="../../../img/mail_send_black_20dp.png" alt="sent">
                <router-link to="/email/sent">Sent</router-link>
            </div>
            <div @click="onFilterByFolder('bin')" class="email-sidebar-btn bin">
                <img src="../../../img/mail_delete_black_20dp.png" alt="bin">
                <router-link to="/email/bin">Bin</router-link>
            </div>
            <div @click="onFilterByFolder('starred')" class="email-sidebar-btn star">
                <img src="../../../img/mail_star_black_20dp.png" alt="starred">
                <router-link to="/email/sttared">Starred</router-link>
            </div>
            <div @click="onFilterByFolder('draft')" class="email-sidebar-btn draft">
                <img src="../../../img/mail_draft_black_20dp.png" alt="draft">
                <router-link to="/email/draft">Draft</router-link>
            </div>
        </div>

    </section>
    
    `,
  //   props: ['unreadCount'],
  data() {
    return {
      filterByFolder: 'inbox',
    }
  },

  created() {},

  methods: {
    onFilterByFolder(folder) {
      this.$emit('filterBy', folder)
    },
  },
  watch: {
    folder(newFolder, prevFolder) {
      console.log('newFolder', newFolder, 'oldFolder', prevFolder)
    },
  },

  computed: {},
}
