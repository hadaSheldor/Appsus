import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.js'
import notesApp from './apps/notes/pages/note-page.cmp.js'
import emailDetails from './apps/mail/cmps/email-details.cmp.js'
import emailList from './apps/mail/cmps/email-list.cmp.js'
import emailSidebar from './apps/mail/cmps/email-sidebar.cmp.js'

const routes = [
  {
    path: '/',
    component: homePage,
  },
  {
    path: '/about',
    component: aboutPage,
  },
  {
    path: '/email/inbox',
    component: emailApp,
    children: [
      {
        path: '/sent',
        components: emailList,
        emailSidebar,
        emailApp,
      },
      {
        path: '/bin',
        components: emailList,
        emailSidebar,
      },
    ],
    // ADD: children /inbox
  },
  {
    path: '/email/:emailId',
    component: emailDetails,
  },
  {
    path: '/notes',
    component: notesApp,
  },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
