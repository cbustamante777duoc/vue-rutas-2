import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "servicios" */ '../views/Servicios.vue')
  },
  {
    // ruta con id o ruta dinamica
    path:'/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "fotos" */ '../views/Fotos.vue')

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
