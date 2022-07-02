import emailPreview from './email-preview.cmp.js'

export default {
  template: `
  <section v-for="email in emails" :key="email.id" class="email-list-container">
    <email-preview 
      :email="email" 
        @marked="onMarked(email)" 
        @toggleRead="onToggleRead(email)" 
        @remove="onRemoved(email)"
        @openEmail="onOpen(email)" />
  </section>
`,
  props: ['emails'],
  methods: {
    onMarked(email) {
      this.$emit('toggleMarked', email)
    },
    onRemoved(email) {
      this.$emit('remove', email)
    },
    onToggleRead(email) {
      this.$emit('toggleRead', email)
    },
    onOpen(email) {
      this.$emit('openEmail', email)
    },
  },

  components: {
    emailPreview,
  },
}
