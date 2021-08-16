import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/creatures',
    name: 'Creatures',
    component: () => import(/* webpackChunkName: "creatures" */ '../views/Creatures.vue')
  },
  {
    path: '/equipment',
    name: 'Equipment',
    component: () => import(/* webpackChunkName: "equipment" */ '../views/Equipment.vue')
  },
  {
    path: '/materials',
    name: 'Materials',
    component: () => import(/* webpackChunkName: "materials" */ '../views/Materials.vue')
  },
  {
    path: '/monsters',
    name: 'Monsters',
    component: () => import(/* webpackChunkName: "monsters" */ '../views/Monsters.vue')
  },
  {
    path: '/treasure',
    name: 'Treasure',
    component: () => import(/* webpackChunkName: "treasure" */ '../views/Treasure.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
