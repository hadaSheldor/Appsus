import { emailService } from '../services/email-services.js'

export default {
  template: `
    <section v-if="mailId">
        <pre>{{mailId}}</pre>
        <pre>{{mailId.body}}</pre>
    </section>
`,
  data() {
    return {
      email: null,
    }
  },
  watch: {
    '$route.params.mailId': {
      handler() {
        const { mailId } = this.$route.params
        if (!mailId) return
        emailService.get(mailId).then((mail) => {
          this.mail = mail
          mail.isRead = true
          emailService.save(mail)
        })
      },
    },
  },
}
