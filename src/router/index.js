import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [ 
  {
    path: '/Home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "/Home" */ '../views/Home.vue')
  },
  {
    path: '/Characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "Characters" */ '../views/Characters.vue')
  },
  {
    path: '/Locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "Locations" */ '../views/Locations.vue')
  },
  {
    path: '/Episodes',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "Episodes" */ '../views/Episodes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
