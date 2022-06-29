import { emailService } from '../services/mail-services.js'
import emailList from '../cmps/email-list.cmp.js'

export default {
  template: `
    <section class="email-app">
        <div class="layout-container">
            
            <div class="emails-container">
              <!-- ADD: emails-filter cmp -->
              <email-list :emails="emails" />
            </div>
            
            <div class="emails-side-bar">
              <!-- ADD: emails-folders cmp -->
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
  },

  unmounted() {},
}
