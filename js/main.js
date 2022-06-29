import appHeader from ''
import appFooter from ''
import { router } from ''

const options = {
  template: `
    <section>
        <router-view></router-view>
    </section>
`,
  components: {
    appFooter,
    appHeader,
  },
}

const app = Vue.createApp(options)
app.use(router)
app.mount('#app')
