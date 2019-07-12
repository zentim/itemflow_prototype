import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: require('@/pages/Home').default
    },
    {
      path: '/new',
      name: 'New',
      component: require('@/pages/CreateItemFlow').default
    },
    {
      path: '/favorite',
      name: 'Favorite',
      component: require('@/pages/Home').default
    },
    {
      path: '/account',
      name: 'Account',
      component: require('@/pages/Account').default
    },
    {
      path: '/trash',
      name: 'Trash',
      component: require('@/pages/Home').default
    },
    // {
    //   path: '/:id',
    //   name: 'Itemflow',
    //   props: true,
    //   component: require('@/pages/ItemFlow').default
    // },
    {
      path: '*',
      redirect: '/'
    }
  ],
  mode: 'history'
})
