import { createRouter, createWebHistory } from 'vue-router'
import HomeView                           from '../views/HomeView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'
import ProjectOverviewView                from '../views/ProjectOverviewView.vue'
import VueHTTPRequestView                 from '../views/Exercises/VueHTTPRequestView.vue'
import PHPHTTPRequestView                 from '../views/Exercises/PHPHTTPRequestView.vue'

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
      path: '/project-overview',
      name: 'project-overview',
      component: ProjectOverviewView
    },

    {
      path: '/ex-vue-http-request',
      name: 'ex-vue-http-request',
      component: VueHTTPRequestView
    },

    {
      path: '/ex-php-http-request',
      name: 'ex-php-http-request',
      component: PHPHTTPRequestView
    },
  ]
})

export default router
