import { emailService } from '../services/mail-services.js'

export default {
  template: `
    <section class="mail-app">
        <div class="mail-layout-container">
            <div class="mail-container">
              <h1>Hi</h1>
              <ul>
                <li>bye</li>
                <li>bye</li>
              </ul>
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

  unmounted() {},
}
