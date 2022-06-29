import emailPreview from './email-preview.cmp.js'

export default {
  template: `
  <section v-for="email in emails" :key="email.id" class="email-list-container">
    <email-preview :email="email" @marked="onMarked" @toggleRead="onToggleRead" @remove="onRemoved" />
  </section>
`,

  props: ['emails'],

  methods: {
    onMarked() {
      console.log('marked')
    },
    onRemoved() {
      console.log('removed')
    },
    onToggleRead() {
      console.log('toggleRead')
    },
  },

  components: {
    emailPreview,
  },
}
