import { emailService } from '../services/email-services.js'
import emailList from '../cmps/email-list.cmp.js'
import emailSidebar from '../cmps/email-sidebar.cmp.js'
import emailDetails from '../cmps/email-details.cmp.js'

export default {
  template: `
    <section class="email-app main-layout">
        <div class="layout-container">
          
          <div class="emails-side-bar">
            <email-sidebar :unreadCount="unreadCount" @filterByFolder="filterByFolder"/>
          </div>
            
          <div class="emails-container">
            <email-list 
              :emails="emails"
              @toggleRead="toggleRead"
              @toggleMarked="toggleMarked"
              @remove="remove"
              @openEmail="openMail"
            />
          </div>
            
        </div>
    </section>
  `,
  data() {
    return {
      emails: null,
      folder: 'inbox',
      filterBy: null,
      selected: null,
      compose: false,
      unreadCount: null,
    }
  },
  created() {
    emailService.query().then((emails) => {
      return (this.emails = emails.sort((e1, e2) => e2.sentAt - e1.sentAt))
    }),
      emailService.getUnread().then((count) => {
        return (this.unreadCount = count.length)
      })
    emailService
      .getByFolder('inbox')
      .then(
        (emails) =>
          (this.emails = emails.sort((e1, e2) => e2.sentAt - e1.sentAt))
      )
  },
  methods: {
    toggleRead(email) {
      emailService.toggleRead(email).then(
        emailService.getUnread().then((count) => {
          return count.length > this.unreadCount
            ? this.unreadCount++
            : this.unreadCount--
        })
      )
    },
    toggleMarked(email) {
      emailService.toggleMarked(email)
    },
    remove(email) {
      const idx = this.emails.findIndex((e) => email.id === e.id)
      this.emails[idx].folder = 'bin'
      this.emails.splice(idx, 1)
      emailService.moveToBin(email)
    },
    filterByFolder(folder) {
      this.folder = folder
      emailService
        .getByFolder(folder)
        .then(
          (emails) =>
            (this.emails = emails.sort((e1, e2) => e2.sentAt - e1.sentAt))
        )
    },
    openEmail(email) {
      console.log('email', email)
    },
  },

  computed: {},

  components: {
    emailList,
    emailSidebar,
    emailDetails,
  },
}
