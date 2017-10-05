<template>
  <div>
    <div class="article-list">
      <h1>Image</h1>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <ul>
          <li v-for="item in articlelist" class="item">
            <img v-lazy="item.url" alt="文章图片" width="94%">
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data() {
    return {
      articlelist: [],
      busy: false
    }
  },
  created() {
    this.$http.get("http://gank.io/api/data/%E7%A6%8F%E5%88%A9/30/1")
      .then((res) => {
        // this.filterData(res);
        this.articlelist = res.data.results;
      }).catch((e) => (alert(e)))
  },
  methods: {
    loadMore: function() {
      this.busy = true;

      setTimeout(() => {
        for (var i = 0, j = 10; i < j; i++) {
          this.data.push({ name: count++ });
        }
        this.busy = false;
      }, 1000);
    }
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
  padding: 0;
}
</style>
