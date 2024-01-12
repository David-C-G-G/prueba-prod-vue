import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/pages/Inicio';
import Login from '@/pages/Login';


Vue.use(VueRouter)

const routes = [
  {path: '/', component: Inicio},
  {path: '/login', component: Login},
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
