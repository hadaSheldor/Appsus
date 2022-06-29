// import appHeader from ''
// import appFooter from ''
// import { router } from './services/router.js'
import mailApp from './apps/mail/pages/mail-app.js'

const options = {
  template: `
    <section>
      <mail-app />
        <!-- <router-view></router-view> -->
    </section>
`,
  components: {
    // appFooter,
    // appHeader,
    mailApp,
  },
}

const app = Vue.createApp(options)
// app.use(router)
app.mount('#app')
