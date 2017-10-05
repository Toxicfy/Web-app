<template>
  <div class="hello">
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="favorites" title="排行榜" icon="favorite" to="/movie" />
        <mu-bottom-nav-item value="recents" title="正在热映" icon="restore" to="/movie/HotMovie" />
        <mu-bottom-nav-item value="nearby" title="即将上映" icon="location_on" to="/movie/recentMovie" />
      </mu-bottom-nav>
    </mu-paper>
    <router-view></router-view>
    <!-- <Footer></Footer> -->

  </div>
</template>

<script>
// import Footer from '@/components/Footer'

export default {
  name: 'hello',
  data() {
    return {
      bottomNav: 'favorites',
      topList: []
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
