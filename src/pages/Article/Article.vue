<template>
  <div>
    <div class="article-list">
      <!-- <h1>Image</h1> -->
      <!-- <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10"> -->
        <ul>
          <li v-for="item in articlelist" class="item">
            <img v-lazy="item.url" alt="文章图片" width="94%">
          </li>
        </ul>
      <!-- </div> -->
    </div>
    <div class="loading-container" v-show="!articlelist.length">
      <loading></loading>
    </div>

  </div>
</template>

<script>
import Loading from '@/components/Loading'

export default {
  data() {
    return {
      articlelist: [],
      // busy: false
    }
  },
  created() {
    this.$http.get("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/50/1")
      .then((res) => {
        // this.filterData(res);
        this.articlelist = res.data.results;
      }).catch((e) => (alert(e)))
  },
  methods: {
    // filterData(res) {
    //   let dataArray = res.data.results;
    //   dataArray.forEach(function(ele) {
    //     if (ele.images) {
    //       this.articlelist.push(ele);
    //     }else{
    //       return;
    //     }
    //   }, this);
    // }
  },
  components: {
    Loading
  }
}
</script>

<style scoped lang="css">
* {
  margin: 0;
  padding: 0;
}

.article-list {
  margin-left: 3%;
}

h1 {
  margin-bottom: 10px;
}

.item {
  break-inside: avoid;
  box-sizing: border-box;
  box-shadow: 0 0 5px rgba(100, 100, 100, 0.5);
  margin: 10px;
}

ul {
  max-width: 95%;
  column-count: 2;
  column-gap: 0;
  list-style-type: none;
  margin-top: 14px;
  padding: 0;
}
.loading-container {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-50%)
}
</style>
