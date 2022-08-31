import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import SearchResults from '../views/SearchResults.vue'
import ViewPerson from '../views/ViewPerson.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/:movieId',
    name: 'detail',
    component: HomePage
  },
  {
    path: '/search',
    name: 'search',
    component: SearchResults
  },
  {
    path: '/person/:personId',
    name: 'person',
    component: ViewPerson
  }
  // {
  //   path: '/search',
  //   name: 'search',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
