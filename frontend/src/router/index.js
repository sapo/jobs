import { createRouter, createWebHistory } from 'vue-router'
import ProjectInformationView             from '../views/ProjectInformationView.vue'
import InterviewObjectivesView            from '../views/InterviewObjectivesView.vue'

import BasicConceptsView                  from '@/views/BasicConcepts/BasicConceptsView.vue'
import ErrorHandlingView                  from '@/views/ErrorHandling/ErrorHandlingView.vue'
import DevelopmentView                    from '@/views/Development/DevelopmentView.vue'
import AdvancedConceptsView               from '@/views/AdvancedConcepts/AdvancedConceptsView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect:'/project-information',
      children: [
        {
          path: 'basic-concepts/:exercise',
          component: BasicConceptsView,
        },
        {
          path: 'error-handling/:exercise',
          component: ErrorHandlingView,
        },

        {
          path: 'development/:exercise',
          component: DevelopmentView,
        },

        {
          path: 'advanced-concepts/:exercise',
          component: AdvancedConceptsView,
        },
      ],
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
