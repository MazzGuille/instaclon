import { createRouter, createWebHistory } from 'vue-router'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import HomeView from '../views/HomeView.vue'


const routes = [
  {
    path: "/",
    redirect: "/Login",
  },
  {
    path: '/registro',
    name: 'Registro',
    component: Register
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/HomeView',
    name: 'HomeView',
    component: HomeView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
