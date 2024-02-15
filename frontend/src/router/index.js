import { createRouter, createWebHistory } from 'vue-router'
import HomeView                           from '../views/HomeView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'
import PHPDogErrorFixView                 from '../views/Exercises/PHPDogErrorFixView.vue'
import PHPHTTPRequestView                 from '../views/Exercises/PHPHTTPRequestView.vue'
import VueHTTPRequestView                 from '../views/Exercises/VueHTTPRequestView.vue'
import VueBasicConceptsView1              from '../views/Exercises/VueBasicConceptsView1.vue'
import VueBasicConceptsView2              from '../views/Exercises/VueBasicConceptsView2.vue'
import VueAdvancedConceptsView1           from '../views/Exercises/VueAdvancedConceptsView1.vue'


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

    // {
    //   path: '/backend-overview',
    //   name: 'backend-overview',
    //   component: BackendOverviewView
    // },

    {
      path: '/ex-vue-basic-concepts-1',
      name: 'ex-vue-basic-concepts-1',
      component: VueBasicConceptsView1
    },

    {
      path: '/ex-vue-basic-concepts-2',
      name: 'ex-vue-basic-concepts-2',
      component: VueBasicConceptsView2
    },

    {
      path: '/ex-vue-advanced-concepts-1',
      name: 'ex-vue-advanced-concepts-1',
      component: VueAdvancedConceptsView1
    },

    {
      path: '/ex-vue-http-request',
      name: 'ex-vue-http-request',
      component: VueHTTPRequestView
    },

    {
      path: '/ex-php-request',
      name: 'ex-php-request',
      component: PHPHTTPRequestView
    },

    {
      path: '/ex-php-dog-error-fix',
      name: 'ex-php-http-request',
      component: PHPDogErrorFixView
    },
  ]
})

export default router
