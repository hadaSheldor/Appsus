import { emailService } from '../services/email-services.js'
import { utilService } from '../../../services/util.js'

export default {
  template: `
    <section class="email-compose-container">
        <div class="email-compose-title">
            <span>New Message</span>
            <span class="close-btn" @click="closeCompose">x</span>
        </div>
        <form class="email-compose-form">
            <div className="email-compose-to">
                <textarea maxLength="100" placeholder="To" ref="to" v-model="newEmail.to" required></textarea>
            </div>
            <div className="email-compose-subject">
                <textarea maxLength="100" placeholder="Subject" v-model="newEmail.subject"></textarea>
            </div>
            <div className="email-compose-txt">
                <textarea name="main-txt" v-model="newEmail.body"></textarea>
            </div>
            <div className="email-compose-actions">
                <button className="send-btn" @click="onCreateNewEmail">Send</button>
                <img className="delete-btn" src="../../../../img/mail_delete_black_20dp.png"  />
            </div>
        </form>
    </section>
    `,
  data() {
    return {
      isOpen: true,
      newEmail: {
        to: '',
        subject: '',
        body: '',
      },
    }
  },
  mounted() {
    this.$refs.to.focus()
  },
  methods: {
    closeCompose() {
      this.isOpen = false
      this.$emit('onCloseCompose')
    },
    // onCreateNewEmail() {
    //   emailService.createNewEmail(this.newEmail).then((email) => {})
    // },
  },
  computed: {},
  unmounted() {},
}
