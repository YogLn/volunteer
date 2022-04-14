import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/register/:label',
    name: 'Register',
    component: () =>
      import(
        /* webpackChunkName: "Register" */ '../views/register/register.vue'
      )
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "Login" */ '../views/login')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import(/* webpackChunkName: "Main" */ '../views/main'),
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../views/home')
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import(/* webpackChunkName: "Team" */ '../views/team')
  },
  {
    path: '/team/detail/:id',
    name: 'TeamDetail',
    component: () =>
      import(/* webpackChunkName: "Team" */ '../views/team/detail.vue')
  },
  {
    path: '/info',
    name: 'Info',
    component: () => import(/* webpackChunkName: "Help" */ '../views/info')
  },
  {
    path: '/info/:id',
    name: 'InfoDetail',
    component: () =>
      import(/* webpackChunkName: "Help" */ '../views/info/detail.vue')
  },
  {
    path: '/moment',
    name: 'Moment',
    component: () => import(/* webpackChunkName: "Moment" */ '../views/moment')
  },
  {
    path: '/moment/:id',
    name: 'MomentDetail',
    component: () =>
      import(/* webpackChunkName: "Moment" */ '../views/moment/detail.vue')
  },
  {
    path: '/project',
    name: 'Project',
    component: () =>
      import(/* webpackChunkName: "Project" */ '../views/project')
  },
  {
    path: '/project/:id',
    name: 'ProjectDetail',
    component: () =>
      import(/* webpackChunkName: "Project" */ '../views/project/detail.vue')
  },
  {
    path: '/newActivity',
    name: 'newActivity',
    component: () =>
      import(
        /* webpackChunkName: "Project" */ '../views/project/newProject.vue'
      )
  },
  {
    path: '/my',
    name: 'My',
    component: () =>
      import(/* webpackChunkName: "My" */ '../views/user/my-info.vue')
  },
  {
    path: '/user',
    name: 'User',
    component: () =>
      import(/* webpackChunkName: "User" */ '../views/user/user.vue'),
    redirect: '/user/center',
    children: [
      {
        path: '/',
        component: () =>
          import(
            /* webpackChunkName: "User" */ '../views/user/cpns/my-home.vue'
          )
      },
      {
        path: 'center',
        name: 'center',
        component: () =>
          import(
            /* webpackChunkName: "MyHome" */ '../views/user/cpns/my-home.vue'
          )
      },
      {
        path: 'changeInfo',
        name: 'changeInfo',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/user/cpns/change-info.vue'
          )
      },
      {
        path: 'myTeam',
        name: 'myTeam',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/user/cpns/my-team.vue'
          )
      },
      {
        path: 'myProject',
        name: 'myProject',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/user/cpns/my-project.vue'
          )
      },
      {
        path: 'myReport',
        name: 'myReport',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/user/cpns/my-report.vue'
          )
      },
      {
        path: 'myTime',
        name: 'myTime',
        component: () =>
          import(
            /* webpackChunkName: "about" */ '../views/user/cpns/my-time.vue'
          )
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
