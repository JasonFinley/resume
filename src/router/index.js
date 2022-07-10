import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ResumeView from '../views/ResumeView.vue'
import WorkFirstView from '../views/WorkFirstView.vue'
import WorkSecondView from '../views/WorkSecondView.vue'
import WorkThirdView from '../views/WorkThirdView.vue'
import FutureView from '../views/FutureView.vue'
import CollectionView from '../views/CollectionView.vue'

const routes = [
  {
    path: '/',
    name: 'Resume',
    component: ResumeView
  },
  {
    path: '/work1',
    name: 'WorkFirst',
    component: WorkFirstView
  },
  {
    path: '/work2',
    name: 'WorkSecond',
    component: WorkSecondView
  },
  {
    path: '/work3',
    name: 'WordThird',
    component: WorkThirdView
  },
  {
    path: '/future',
    name: 'Future',
    component: FutureView
  },
  {
    path: '/collection',
    name: 'Collection',
    component: CollectionView
  },
  {
    path: '/vue_hello_world',
    name: 'HelloWorld',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
