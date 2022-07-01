import { emailService } from '../services/email-services.js'
import emailList from '../cmps/email-list.cmp.js'
import emailSidebar from '../cmps/email-sidebar.cmp.js'

export default {
  template: `
    <section class="email-app">
        <div class="layout-container">
          
          <!-- Sidebar -->
          <div class="emails-side-bar">
            <email-sidebar 
              @filterBy="filterBy"
            />
          </div>
            
          <!-- Emails list -->
          <div class="emails-container">
            <email-list 
              :emails="emails"
              @toggleRead="toggleRead"
              @toggleMarked="toggleMarked"
              @remove="remove"
            />
          </div>
            
        </div>
    </section>
  `,
  data() {
    return {
      emails: null,
      filterBy: null,
      selected: null,
      compose: false,
    }
  },

  created() {
    emailService.query().then((emails) => (this.emails = emails))
  },

  methods: {
    toggleRead(email) {
      emailService.toggleRead(email)
    },
    toggleMarked(email) {
      emailService.toggleMarked(email)
    },
    remove(emailId) {
      const idx = this.emails.findIndex((email) => email.id === emailId)
      this.emails[idx].folder = 'bin'
      this.emails.splice(idx, 1)
      emailService.moveToBin(emailId)
    },
    filterBy(folder) {
      emailService.getByFolder(folder)
    },
  },

  computed: {
    // emailsForDisplay() {
    //   const emails = this.emails
    // },
  },

  components: {
    emailList,
    emailSidebar,
  },

  unmounted() {},
}
