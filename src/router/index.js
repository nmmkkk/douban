import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/layout/header.vue'
import Mid from '@/layout/mid.vue'
import Movie from '@/layout/movie.vue'
import Music from '@/layout/music.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'header',
      component:Header ,
      redirect:'/mid',
      children:[{
        path:'/mid',
        name:'mid',
        component: Mid
      },{
        path:'/movie',
        name:'movie',
        component: Movie
      },{
        path:'/music',
        name:'music',
        component: Music
      },]
    },
  ]
})
