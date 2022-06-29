import { emailService } from '../services/mail-services.js'
import emailList from '../cmps/email-list.cmp.js'
import emailSidebar from '../cmps/email-sidebar.cmp.js'

export default {
  template: `
    <section class="email-app">
        <div class="layout-container">
          
          <div class="emails-side-bar">
            <email-sidebar />
          </div>
            
          <div class="emails-container">
            <email-list :emails="emails" />
          </div>
            
        </div>
    </section>
  `,
  data() {
    return {
      emails: null,
    }
  },

  created() {
    emailService.query().then((emails) => (this.emails = emails))
  },

  methods: {},

  computed: {},

  components: {
    emailList,
    emailSidebar,
  },

  unmounted() {},
}
