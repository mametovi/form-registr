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
    path: '/reg',
    name: 'Registration',
    component: () => import(/* webpackChunkName: "registration" */ '../views/Registration.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/succsses',
    name: 'succsses',
    component: () => import(/* webpackChunkName: "Saccess-registration" */ '../views/SaccessRegistration.vue')
  }, 
  {
    path: '/veri',
    name: 'verification',
    component: () => import(/* webpackChunkName: "Verification" */ '../views/Verification.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
