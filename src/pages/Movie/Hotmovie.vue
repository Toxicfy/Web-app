<template>
  <div>
    <scroll :data="hotMovieList" class="scrolllist">
      <ul class="movie-list">
        <li v-for="item in hotMovieList" class="item">
          <router-link :to="{name: 'MovieSubject', params: { id: item.id}}">
            <div class="icon">
              <img v-lazy="item.images.medium" width="120" height="170">
            </div>
            <div class="text">
              <h4 class="name">{{item.title}}</h4>
              <p class="rate">评分：{{item.rating.average}}</p>
            </div>
          </router-link>

        </li>
      </ul>
    </scroll>
    <div class="loading-container" v-show="!hotMovieList.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Scroll from '@/components/Scroll'
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      hotMovieList: []
    }
  },
  created() {
    this.$http.get('/api/movie/in_theaters', { city: "武汉" })
      .then((res) => {
        if (res.data.start === 0) {
          this.hotMovieList = res.data.subjects;
        }
      })
  },
  components: {
    Loading,
    Scroll
  }
}
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.scrolllist {
  height: 550px;
}

.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.item {
  width: 30%;
  margin: 10px 5px 0 5px;
  box-shadow: 0 0 1.5rem rgba(60, 60, 60, 0.1)
}

.text {
  width: 100%;
  overflow: hidden;
}

.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%)
}
</style>
