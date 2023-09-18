import { createRouter, createWebHistory } from 'vue-router'
//Import layout
// import LayoutWithoutAuth from '../layout/LayoutWithoutAuth.vue'
import NoFooter from '../layout/Nofooter.vue'
// import LayoutWithAuth from '../layout/LayoutWithAuth.vue'

// // import view
import loginView from '../views/LoginView.vue'
import SignupView from '../views/SignupView.vue'
import ResetPassword from '../views/ResetPassword.vue'
import HomeView from '../views/HomeView.vue'
import DashboardView from '../views/DashboardView.vue'
// import HomeAuthView from '../views/HomeAuthView.vue'

// // import component
import Post from '../components/postComponent.vue'
// import HeaderAuth from '../components/HeaderAuth.vue'
// import HeaderNoAuth from '../components/HeaderNoAuth.vue'
// import SearchDomaine from '../components/SearchDomaine.vue'
// import Notifications from '../components/NotificationsComponent.vue'
// import Profil from '../components/Profil.vue'
// import EditProfil from '../components/EditProfilComponent.vue'
const routes = [
  {
    path: '/login',
    name: 'login',
    component: loginView,
    meta: { layout: NoFooter, public: true }
  },
  {
    path: '/register',
    name: 'register',
    component: SignupView,
    meta: { layout: NoFooter, public: true }
  },
  {
    path: '/home-2',
    name: 'Acceuil',
    component: HomeView,
    meta: { layout: NoFooter, public: true }
  },
  {
    path: '/',
    name: 'Dashboard',
    component: DashboardView,
    meta: { layout: NoFooter, public: true }
  },
  {
    path: '/forget',
    name: 'Reset Password',
    component: ResetPassword,
    meta: { layout: NoFooter, public: true }
  },
  {
    path: '/post',
    name: 'post',
    component: Post,
    meta: { layout: NoFooter, public: true }
  }
]
const baseURL = import.meta.env.BASE_URL
const router = createRouter({
  history: createWebHistory(baseURL),
  routes
})

export default router
