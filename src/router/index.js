import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// movie page
import Movie from '@/pages/Movie/Movie'
import HotMovie from '@/pages/Movie/HotMovie'
import RecentMovie from '@/pages/Movie/RecentMovie'
import TopMovie from '@/pages/Movie/TopMovie'

// 干货--value page--Valuable articles
import Article from '@/pages/Article/Article'

// import Schedule from '@/pages/Schedule'


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
  },{
    path: '/article',
    component: Article
  }]
})
