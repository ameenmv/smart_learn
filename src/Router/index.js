import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Landing
    },
    {
      path: '/student',
      component: () => import('../layouts/StudentLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'student-dashboard',
          component: () => import('../views/student/Dashboard.vue')
        },
        {
          path: 'courses',
          name: 'student-courses',
          component: () => import('../views/student/Courses.vue')
        },
        {
          path: 'courses/:id',
          name: 'student-course-details',
          component: () => import('../views/student/CourseDetails.vue')
        },
        {
          path: 'courses/:courseId/lecture/:lectureId',
          name: 'student-lecture',
          component: () => import('../views/student/Lecture.vue')
        },
        {
          path: '',
          redirect: 'dashboard'
        },
        {
          path: 'assignments',
          name: 'student-assignments',
          component: () => import('../views/student/Assignments.vue')
        },
        {
          path: 'ai-assistant',
          name: 'student-ai-assistant',
          component: () => import('../views/student/AIAssistant.vue')
        },
        {
          path: 'profile',
          name: 'student-profile',
          component: () => import('../views/student/Profile.vue')
        },
        {
          path: 'certificates',
          name: 'student-certificates',
          component: () => import('../views/student/Certificates.vue')
        }
      ]
    },
    {
      path: '/student/quiz/:id',
      name: 'student-quiz',
      component: () => import('../views/student/Quiz.vue')
    },
    {
      path: '/dashboard',
      redirect: '/student/dashboard'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
