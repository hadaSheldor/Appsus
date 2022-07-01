import emailPreview from './email-preview.cmp.js'

export default {
  template: `
  <section v-for="email in emails" :key="email.id" class="email-list-container">
    <email-preview 
      :email="email" 
      @marked="onMarked(email)" 
      @toggleRead="onToggleRead(email)" 
      @remove="onRemoved(email.id)" />
  </section>
`,
  props: ['emails'],
  methods: {
    onMarked(email) {
      this.$emit('toggleMarked', email)
    },
    onRemoved(emailId) {
      this.$emit('remove', emailId)
    },
    onToggleRead(email) {
      this.$emit('toggleRead', email)
    },
  },

  components: {
    emailPreview,
  },
}
