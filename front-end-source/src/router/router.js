import VueRouter from 'vue-router'

export default new VueRouter({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/Painting/HomePage.vue'),
    },
  ],
})
