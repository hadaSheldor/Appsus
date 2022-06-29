export default {
  template: `
    <header class="app-header">
       <div class="logo-container">
           <img class="logo" src='../../img/icons-gmail-48.PNG'>
       </div>
       <nav class="nav-bar">
         <router-link to="/">Home</router-link>
         <router-link to="/mail">Mail</router-link>
         <router-link to="/notes">Notes</router-link>
         <router-link to="/about">About</router-link>
       </nav>
    </header>
   `,
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
