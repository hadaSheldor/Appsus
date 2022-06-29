import homePage from './views/home-page.cmp.js'
import aboutPage from './views/about-page.cmp.js'

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
    path: '/note',
    component: noteApp,
  },
]

export const router = VueRouter.createRouter({
  routes,
  history: VueRouter.createWebHashHistory(),
})
