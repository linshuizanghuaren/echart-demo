import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  name: 'echart1',
  component: () => import('../views/echart1.vue')
},
{
  path: '/echart2',
  name: 'echart2',
  component: () => import('../views/echart2.vue')
},
{
  path: '/echart3',
  name: 'echart3',
  component: () => import('../views/echart3.vue')
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router