import homePage from './pages/home-page.cmp.js'
import aboutPage from './pages/about-page.cmp.js'
import mailApp from './apps/mail/pages/mail-app.js'
import notesApp from './apps/notes/pages/note-page.cmp.js'

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
    path: '/mail',
    component: mailApp,
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
