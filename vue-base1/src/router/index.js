import Vue from 'vue'
import VueRouter from 'vue-router'
import One from '@/components/HelloWorld.vue'
import Two from '@/components/demo.vue'
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/one',
      name: 'One',
      component: One,
      meta: {
        title: '',
      }
    },
    {
      path: '/',
      name: 'one',
      component: One,
      meta: {
        title: '',
      }
    },
    {
      path: '/two',
      name: 'Two',
      component: Two,
      meta: {
        title: '',
      }
    },
  ]
})
export default router