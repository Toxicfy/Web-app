<template>
  <div>
    <ul class="movie-list">
      <li v-for="item in resentMovie" class="item">
        <div class="icon">
          <img v-lazy="item.images.medium" width="120" height="170">
        </div>
        <div class="text">
          <h4 class="name">{{item.title}}</h4>
          <p class="rate">评分：{{item.rating.average}}</p>
        </div>
      </li>
    </ul>
        <div class="loading-container" v-show="!resentMovie.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      resentMovie: []
    }
  },
  created() {
    axios.get('/api/movie/coming_soon')
      .then((res) => {
        if (res.data.start === 0) {
          this.resentMovie = res.data.subjects;
        }
      })
  },
  components:{
    Loading
  }
}
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

ul,
li {
  list-style: none;
}
.movie-list{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.item{
  width: 30%;
  margin: 10px 5px 0 5px;
  box-shadow: 0 0 1.5rem rgba(60, 60, 60, 0.1)
}
.text{
  width: 100%;
  overflow: hidden;
}
.loading-container{
  position: absolute;
  top:50%;
  width: 100%;
  transform: translateY(-50%)
}
</style>
