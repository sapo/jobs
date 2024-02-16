import { createRouter, createWebHistory } from 'vue-router'
import HomeView                           from '../views/HomeView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'
import PHPDogErrorFixView                 from '../views/Exercises/PHPDogErrorFixView.vue'
import PHPHTTPRequestView                 from '../views/Exercises/PHPHTTPRequestView.vue'
import VueHTTPRequestView                 from '../views/Exercises/VueHTTPRequestView.vue'
import VueBasicConcepts1View              from '../views/Exercises/VueBasicConcepts1View.vue'
import VueBasicConcepts2View              from '../views/Exercises/VueBasicConcepts2View.vue'
import VueAdvancedConcepts1View           from '../views/Exercises/VueAdvancedConcepts1View.vue'
import PHPEmailHeadersParserView          from '../views/Exercises/PHPEmailHeadersParserView.vue'
import PHPHTTPConcepts1View               from '../views/Exercises/PHPHTTPConcepts1View.vue'
import PHPSecurityConcepts1View           from '../views/Exercises/PHPSecurityConcepts1View.vue'

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
      path: '/ex-php-http-concepts-1',
      name: 'ex-php-http-concepts-1',
      component: PHPHTTPConcepts1View
    },


    {
      path: '/ex-php-security-concepts-1',
      name: 'ex-php-security-concepts-1',
      component: PHPSecurityConcepts1View
    },


    {
      path: '/ex-vue-basic-concepts-1',
      name: 'ex-vue-basic-concepts-1',
      component: VueBasicConcepts1View
    },

    {
      path: '/ex-vue-basic-concepts-2',
      name: 'ex-vue-basic-concepts-2',
      component: VueBasicConcepts2View
    },

    {
      path: '/ex-vue-advanced-concepts-1',
      name: 'ex-vue-advanced-concepts-1',
      component: VueAdvancedConcepts1View
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

    {
      path: '/ex-php-email-headers-parser',
      name: 'ex-php-email-headers-parser',
      component: PHPEmailHeadersParserView
    },
  ]
})

export default router
