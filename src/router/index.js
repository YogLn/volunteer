import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "home" */ '../views/main'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home')
      },
      {
        path: '/team',
        name: 'Team',
        component: () => import(/* webpackChunkName: "about" */ '../views/team')
      },
      {
        path: '/help',
        name: 'Help',
        component: () => import(/* webpackChunkName: "about" */ '../views/help')
      },
      {
        path: '/moment',
        name: 'Moment',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/moment')
      },
      {
        path: '/project',
        name: 'Project',
        component: () =>
          import(/* webpackChunkName: "about" */ '../views/project')
      }
    ]
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/register/user-register.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
