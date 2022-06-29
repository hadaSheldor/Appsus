export default {
  template: `
    <section class="email-preview-container">
        <div class="email-preview-content">
            <!-- ADD: span star img -->
            <div class="subject">{{ email.subject }}</div>
            <div class="body">{{ email.body }}</div>
            <!-- ADD: span email-date -->
        </div>
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
