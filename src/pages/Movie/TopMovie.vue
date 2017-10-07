<template>
  <div>
    <ul class="movie-list">
      <li v-for="(item,index) in topMovie" class="item">
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
    <div class="loading-container" v-show="!topMovie.length">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading'
export default {
  data() {
    return {
      topMovie: [],
      idList: []
    }
  },
  created() {
    this.$http.get('/api/movie/top250')
      .then((res) => {
        if (res.data.start === 0) {
          this.topMovie = res.data.subjects;
          this.topMovie.forEach(function(e) {
            this.idList.push(e.id)
            // console.log(this.idList)
          }, this);
        }
      })
  },
  components: {
    Loading
  },
  mounted() {
    // this.setPageId()
  },
  methods: {

  }
}
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


.movie-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}

.item {
  width: 30%;
  margin: 10px 5px 0 5px;
  box-shadow: 0 0 1.5rem rgba(0, 0, 0, 0.2)
}

.text {
  width: 100%;
  overflow: hidden;
}
h4{
  color: #009688;  
}

.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%)
}
</style>
