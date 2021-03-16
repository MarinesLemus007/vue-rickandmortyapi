import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "/" */ '../views/Home.vue')
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },
  {
    path: '/Locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
