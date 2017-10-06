import Vue from 'vue'
import Router from 'vue-router'
// movie page
import Movie from '@/pages/Movie/Movie'
import HotMovie from '@/pages/Movie/HotMovie'
import RecentMovie from '@/pages/Movie/RecentMovie'
import TopMovie from '@/pages/Movie/TopMovie'
import MovieSubject from '@/pages/Movie/MovieSubject'

// 干货--value page--Valuable articles
import Article from '@/pages/Article/Article'



Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    redirect: '/movie'
  }, {
    path: '/movie',
    name: 'Movie',
    component: Movie,
    children: [{
      path: '',
      component: TopMovie
    }, {
      path: 'hotMovie',
      component: HotMovie
    }, {
      path: 'recentMovie',
      component: RecentMovie
    }]
  }, {
    path: '/article',
    component: Article
  }, {
    path: '/movie/subject/:id',
    name: 'MovieSubject',
    component: MovieSubject,
  }]
})
