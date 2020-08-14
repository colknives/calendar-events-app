import Vue from 'vue'
import VueRouter from 'vue-router'
import CalendarEvent from '../views/CalendarEvent.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'CalendarEvent',
    component: CalendarEvent
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
