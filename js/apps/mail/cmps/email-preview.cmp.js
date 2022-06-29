export default {
  template: `
    <section class="email-preview-container">
        <div class=star>★</div>    
        <span class="from">{{ email.from }}</span>
        <div class="email-preview-content">
            <div class="subject">{{ email.subject }}</div>
            <div class="body">{{ email.body }}</div>
        </div>
        <span class="date">{{ email.sentAt }}</span>
    </section>
    `,

  props: ['email'],

  data() {
    return {}
  },

  created() {},

  methods: {},

  computed: {},

  unmounted() {},
}
