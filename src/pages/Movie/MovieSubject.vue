<template>
  <div class="info">
    <!-- 一个返回的按钮 -->
    <!-- 信息展示 -->
    <h2>{{this.infoList.title}}</h2>
    <div class="img">
      <img :src="this.infoList.images.medium" alt="logo">
      <div>
        <p>{{this.infoList.year}} 年 / {{this.infoList.countries[0]}}</p>
        <ul>
          <li v-for="item in this.infoList.genres">{{item}}</li>
        </ul>
      </div>

    </div>
    <div>
      <mu-raised-button label="我想看" class="demo-raised-button" />
      <mu-raised-button label="看过了" class="demo-raised-button" />
    </div>
    <div class="content">
      <span>{{this.infoList.title}}的简介</span>
      <p>
        {{this.infoList.summary}}
      </p>
      <div class="person">
        <div class="casts">
          <ul>
            <li v-for="item in this.infoList.casts">
              <!-- <img :src="item.avatars.small" alt="avatar"> -->
              <h4>{{item.name}}</h4>
            </li>
          </ul>
        </div>
        <div class="directors">
          <!-- <img :src="this.infoList.director.avatars.small" alt="avatars"> -->
          <!-- <h4>{{this.infoList.director.name}}</h4> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      infoList: []
    }
  },
  created() {
    this.setPageData()
  },
  methods: {
    // 获取到url中的id，然后返回数据
    setPageData() {
      // console.log(`/api/movie/subject/${this.id}`);
      this.$http.get(`/api/movie/subject/${this.id}`)
        .then((res) => {
          console.log(res.data)
          this.infoList = res.data;
        })
    }
  }
}
</script>

<style scoped lang="css">
.info {
  display: flex;
  flex-direction: column;
}

.img {
  display: flex;
}
</style>
