import Vue from 'vue'
import VueRouter from 'vue-router'
import Inicio from '@/views/Inicio.vue'
import Juegos from '@/views/Juegos.vue'
import Juego from '@/views/Juego.vue'
import Contacto from '@/views/Contacto.vue'
/* import NotFound from '@/views/NotFound.vue' */

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/Juegos',
    name: 'Juegos',
    component: Juegos,
    alias:['/Games']
  },
  {
    path: '/Juegos/:id',
    component: Juego,
    props:true,
  },
  {
    path: '/*Contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue')
  },

  //{
  //  path: '/about',
  //  name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //  component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  //}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
