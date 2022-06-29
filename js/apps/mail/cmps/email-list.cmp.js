import emailPreview from './email-preview.cmp.js'

export default {
  template: `
  <section v-for="email in emails" :key="email.id" class="email-list-container">
    <email-preview :email="email"/>
  </section>
`,

  props: ['emails'],

  methods: {},

  components: {
    emailPreview,
  },
}
