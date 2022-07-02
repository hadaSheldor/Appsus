export default {
  template: `
    <header class="app-header">
       <!-- <div class="logo-container">
           <img class="logo" src='../../img/icons-gmail-48.PNG'>
       </div> -->
       <nav class="nav-bar">
         <router-link class="main-menu-item" active-link="active" @click="setActive($event)" to="/">Home</router-link>
         <router-link class="main-menu-item" active-link="active" @click="setActive($event)" to="/email/inbox">eMail</router-link>
         <router-link class="main-menu-item" active-link="active" @click="setActive($event)" to="/notes">Notes</router-link>
         <router-link class="main-menu-item" active-link="active"  @click="setActive($event)" to="/about">About</router-link>
       </nav>
    </header>
   `,
  data() {
    return {}
  },
  methods: {
    setActive(event){
    //   const menuItems = this.$el.querySelectorAll(".main-menu-item")
    //   menuItems.forEach(element => {
    //     element.classList.remove('active')
    //   })
    //   event.target.classList.add('active')
     }
  },
  computed: {},
}
