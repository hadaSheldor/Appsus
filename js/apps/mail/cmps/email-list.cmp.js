import emailPreview from './email-preview.cmp.js'

export default {
  template: `
    <table class="email-list">
        <tbody>
            <tr v-for="email in emails" :key="email.id" >
                <email-preview :email="email"/>
                <!-- ADD: email-preview cmp -->
            </tr>
        </tbody>
    </table>          
`,

  props: ['emails'],

  methods: {},

  components: {
    emailPreview,
  },
}
