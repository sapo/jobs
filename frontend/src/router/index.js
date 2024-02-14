import { createRouter, createWebHistory } from 'vue-router'
import HomeView                           from '../views/HomeView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'
import BackendOverviewView                from '../views/BackendOverviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/interview-objectives',
      name: 'backend-hello-world',
      component: InterviewObjectivesView
    },

    {
      path: '/backend-overview',
      name: 'backend-overview',
      component: BackendOverviewView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
