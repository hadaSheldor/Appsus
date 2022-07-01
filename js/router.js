import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import emailApp from './apps/mail/pages/email-app.js'
import notesApp from './apps/notes/pages/note-page.cmp.js'
import emailDetails from './apps/mail/cmps/email-details.cmp.js'

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
  },
  {
    path: '/email/sent',
    component: emailApp,
  },
  {
    path: '/email/bin',
    component: emailApp,
  },
  {
    path: '/email/starred',
    component: emailApp,
  },
  {
    path: '/email/draft',
    component: emailApp,
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
