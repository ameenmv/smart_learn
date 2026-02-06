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
          redirect: { name: 'student-dashboard' }
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
      path: '/instructor',
      component: () => import('../layouts/InstructorLayout.vue'),
      children: [
        {
          path: 'dashboard',
          name: 'instructor-dashboard',
          component: () => import('../views/instructor/Dashboard.vue')
        },
        {
          path: 'courses',
          name: 'instructor-courses',
          component: () => import('../views/instructor/Courses.vue')
        },
        {
          path: 'lectures/upload',
          name: 'instructor-upload-lecture',
          component: () => import('../views/instructor/UploadLecture.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'assignments/create',
          name: 'instructor-create-assignment',
          component: () => import('../views/instructor/CreateAssignment.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'certificates/issue',
          name: 'instructor-issue-certificate',
          component: () => import('../views/instructor/IssueCertificate.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'lectures',
          name: 'instructor-lectures',
          component: () => import('../views/instructor/Lectures.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'quizzes',
          name: 'instructor-quizzes',
          redirect: { name: 'instructor-quiz-create' }
        },
        {
          path: 'assignments',
          name: 'instructor-assignments',
          component: () => import('../views/instructor/Assignments.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'quizzes/create',
          name: 'instructor-quiz-create',
          component: () => import('../views/instructor/CreateQuiz.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'quizzes/assign',
          name: 'instructor-quiz-assign',
          component: () => import('../views/instructor/AssignQuiz.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'students',
          name: 'instructor-students',
          component: () => import('../views/instructor/Students.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: 'settings',
          name: 'instructor-settings',
          component: () => import('../views/instructor/Settings.vue'),
          meta: { hideNavbar: true, fullWidth: true }
        },
        {
          path: '',
          redirect: { name: 'instructor-dashboard' }
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
