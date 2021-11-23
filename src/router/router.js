import { createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import ShowDetails from "../views/ShowDetails.vue"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: ShowDetails
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router