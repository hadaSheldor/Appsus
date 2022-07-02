export default {
  template: `
    <header class="app-header">
       <!-- <div class="logo-container">
           <img class="logo" src='../../img/icons-gmail-48.PNG'>
       </div> -->
       <nav class="nav-bar">
         <router-link class="main-menu-item" to="/">Home</router-link>
         <router-link class="main-menu-item"  to="/email/inbox">eMail</router-link>
         <router-link class="main-menu-item"  to="/notes">Notes</router-link>
         <router-link class="main-menu-item" to="/about">About</router-link>
       </nav>
    </header>
   `,
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
