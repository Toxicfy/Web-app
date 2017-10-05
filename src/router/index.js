import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Movie from '@/pages/Movie/Movie'
import HotMovie from '@/pages/Movie/HotMovie'
import RecentMovie from '@/pages/Movie/RecentMovie'
import TopMovie from '@/pages/Movie/TopMovie'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    children: [{
      path:'',
      component: TopMovie
    },{
      path: 'hotMovie',
      component: HotMovie
    }, {
      path: 'recentMovie',
      component: RecentMovie
    }]
  }]
})
