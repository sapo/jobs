import { createRouter, createWebHistory } from 'vue-router'
import ProjectInformationView             from '../views/ProjectInformationView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'

import PHPBasicConceptsView               from '@/views/BasicConcepts/PHPSimplePostView.vue'
import VUEBasicConceptsView               from '@/views/BasicConcepts/VUEDivToggleView.vue'
import SecurityBasicConceptsView          from '@/views/BasicConcepts/PHPSQLInjectionView.vue'

import PHPErrorHandlingView               from '@/views/ErrorHandling/PHPDogErrorFixView.vue'

import PHPAdvancedConceptsView            from '@/views/AdvancedConcepts/PHPHTTPRequestView.vue'
import VUEAdvancedConceptsView            from '@/views/AdvancedConcepts/VUEHTTPRequestView.vue'

import PHPProblemSolvingView              from '@/views/ProblemSolving/PHPEmailHeadersParserView.vue'
import VUEProblemSolvingView              from '@/views/ProblemSolving/VUEArrowSelectionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/project-information',
      children: [
        {
          path: 'basic-concepts',
          redirect: 'basic-concepts/php-basic-concepts',
          children : [
            {
              path: 'php-basic-concepts',
              name: 'php-basic-concepts',
              component: PHPBasicConceptsView,
            },
            {
              path: 'vue-basic-concepts',
              name: 'vue-basic-concepts',
              component: VUEBasicConceptsView,
            },
            {
              path: 'security-basic-concepts',
              name: 'security-basic-concepts',
              component: SecurityBasicConceptsView,
            }
          ]
        },
        {
          path: 'error-handling',
          redirect: 'error-handling/php-error-handling',
          children : [
            {
              path: 'php-error-handling',
              name: 'php-error-handling',
              component: PHPErrorHandlingView,
            },
          ]
        },

        {
          path: 'advanced-concepts',
          redirect: 'advanced-concepts/php-advanced-concepts',
          children : [
            {
              path: 'php-advanced-concepts',
              name: 'php-advanced-concepts',
              component: PHPAdvancedConceptsView,
            },
            {
              path: 'vue-advanced-concepts',
              name: 'vue-advanced-concepts',
              component: VUEAdvancedConceptsView,
            },
          ]
        },

        {
          path: 'problem-solving',
          redirect: 'problem-solving/php-problem-solving',
          children : [
            {
              path: 'php-problem-solving',
              name: 'php-problem-solving',
              component: PHPProblemSolvingView,
            },
            {
              path: 'vue-problem-solving',
              name: 'vue-problem-solving',
              component: VUEProblemSolvingView,
            },
          ]
        }
      ]
    },
    {
      path: '/project-information',
      name: 'project-information',
      component: ProjectInformationView,
    },
    {
      path: '/interview-objectives',
      name: 'backend-hello-world',
      component: InterviewObjectivesView
    },
  ]
})

export default router
