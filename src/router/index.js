import { createRouter, createWebHistory } from 'vue-router'
import isAdmin from '@/middlewares/isAdmin'

const routes = [
  {
    path: '/',
    name: 'home',
    component: ()=>import(`@/pages/LandingPage`)
  },
  {
    path: '/admin',
    name: 'admin',
    redirect: {name: 'adminDashboard'},
    component: ()=>import(`@/pages/admin/AdminPage`),
    beforeEnter: isAdmin,
    children: [
      {
        path: 'dashboard',
        name: 'adminDashboard',
        component: ()=>import(`@/pages/admin/dashboard/AdminDashboard`),
        beforeEnter: isAdmin
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
