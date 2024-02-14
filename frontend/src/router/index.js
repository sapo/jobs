import { createRouter, createWebHistory } from 'vue-router'
import HomeView                           from '../views/HomeView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'
import ProjectOverviewView                from '../views/ProjectOverviewView.vue'
import HTTPRequestView                    from '../views/Exercises/HTTPRequestView.vue'

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
      component: HTTPRequestView
    },

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
