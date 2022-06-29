export default {
  template: `
    <section class="email-preview-container">
        <div @click.stop="onMark(email)" class=star>★</div>    
        <span class="from">{{ email.from }}</span>
        <div class="email-preview-content">
            <div class="subject">{{ email.subject }}</div>
            <div class="body">{{ email.body }}</div>
        </div>
        <span class="date">{{ formatDate(email) }}</span>
        <div class="trash">
            <img @click.stop="onRemove(email.id)" src="../../../img/trash-can50.png" alt="">    
        </div>
        <div class="read-icon">
            <img @click.stop="onToggleRead(email)" src="../../../img/trash-can50.png" alt="">    
        </div>
    </section>
    `,

  props: ['email'],

  data() {
    return {}
  },

  created() {},

  methods: {
    onRemove(id) {
      this.$emit('remove', id)
    },

    onMark(email) {
      this.$emit('marked', email)
    },

    onToggleRead(email) {
      this.$emit('toggleRead', email)
    },

    formatDate(email) {
      const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
      })
      const date = new Date(email.sentAt)
      const now = Date.now()
      const diff = now - email.sentAt
      const day = 1000 * 60 * 60 * 24

      if (diff < day) return 'Today'
      if (diff < day * 2) return 'Yesterday'
      return longEnUSFormatter.format(date)
    },
  },

  computed: {},

  unmounted() {},
}
