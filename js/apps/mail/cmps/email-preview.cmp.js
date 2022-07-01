export default {
  template: `
    <section class="email-preview-container">
      <td>
        <span @click.stop="onMark(email)" class="star">{{ isStarred(email) }}</span>    
      </td>    
      <td class="from" :class='isRead(email)'>{{ email.from }}</td>
        <div class="email-preview-content" >
            <td class="subject" :class='isRead(email)'>{{ email.subject }}</td>
            <td class="body"> - {{email.body }}</td>
        </div>
      <td class="date" :class='isRead(email)'>{{ formatDate(email.sentAt) }}</td>
        <span class="trash-icon">
          <img @click.stop="onRemove(email)" src="../../../img/mail_delete_black_20dp.png">    
        </span>
        <span class="read-icon">
          <img @click.stop="onToggleRead(email)" src="../../../img/mail_markunread_black_20dp.png">    
        </span>
    </section>
  `,

  props: ['email'],
  data() {},

  methods: {
    onRemove(email) {
      this.$emit('remove', email)
    },

    onMark(email) {
      this.$emit('marked', email)
    },

    onToggleRead(email) {
      this.$emit('toggleRead', email)
    },

    formatDate(timeStamp) {
      const longEnUSFormatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
      })

      const date = new Date(timeStamp)
      const now = Date.now()
      const diff = now - timeStamp
      const day = 1000 * 60 * 60 * 24

      if (diff < day) return 'Today'
      if (diff < day * 2) return 'Yesterday'
      return longEnUSFormatter.format(date)
    },

    isStarred(email) {
      return email.isMarked ? '★' : '☆'
    },

    isRead(email) {
      return email.isRead ? 'read' : 'unRead'
    },
  },

  computed: {},
}
