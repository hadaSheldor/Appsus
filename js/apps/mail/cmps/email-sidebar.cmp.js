export default {
  template: `
    <section class="email-sidebar-container">
      
      <!-- Compose -->
      <div class="compose-btn">
        <img src="../../../img/mail_create_32dp.png" />
        <span>Compose</span>
      </div>
      
      <!-- Folders -->
      <div>
        <div @click="onFilterByFolder('inbox')" class="email-sidebar-btn inbox">
          <img src="../../../img/mail_draft_black_20dp.png" alt="inbox">
          <router-link to="/email/inbox" class="btn">Inbox</router-link>
          <span class="unread-count">{{ unreadCount }}</span>
        </div>
        <div @click="onFilterByFolder('sent')" class="email-sidebar-btn sent">
          <img src="../../../img/mail_send_black_20dp.png" alt="sent">
          <router-link to="/email/sent" class="btn">Sent</router-link>
        </div>
        <div @click="onFilterByFolder('bin')" class="email-sidebar-btn bin">
          <img src="../../../img/mail_delete_black_20dp.png" alt="bin">
          <router-link to="/email/bin" class="btn">Bin</router-link>
        </div>
        <div @click="onFilterByFolder('starred')" class="email-sidebar-btn star">
          <img src="../../../img/mail_star_black_20dp.png" alt="starred">
          <router-link to="/email/starred" class="btn">Starred</router-link>
        </div>
        <!-- <div @click="onFilterByFolder('draft')" class="email-sidebar-btn draft">
          <img src="../../../img/mail_draft_black_20dp.png" alt="draft">
          <router-link to="/email/draft" class="btn">Draft</router-link>
        </div> -->
      </div>
    </section>
  `,
  props: ['unreadCount'],
  data() {
    return {
      filterByFolder: 'inbox',
    }
  },
  methods: {
    onFilterByFolder(folder) {
      this.$emit('filterByFolder', folder)
    },
  },
}
