<template>
  <div class="info">
    <!-- 一个返回的按钮 -->
    <!-- 信息展示 -->
    <h2>{{this.infoList.title}}</h2>
    <div class="img">
      <img :src="this.infoList.images.medium" alt="logo">
      <div class="sub-info">
        <p>{{this.infoList.year}} 年 / {{this.infoList.countries[0]}}</p>
        <p>{{this.infoList.ratings_count}}人评价</p>
        <h4 style="color:rgb(24, 119, 110)">分类</h4>
        <ul>
          <li v-for="item in this.infoList.genres">{{item}}</li>
        </ul>
      </div>

    </div>
    <div class="btn">
      <a>我想看</a>
      <a>看过了</a>
    </div>
    <div class="content">
      <span>{{this.infoList.title}}的简介</span>
      <p>
        {{this.infoList.summary}}
      </p>
      <div class="person">
        <div class="casts">
          <span>人物角色</span>
          <ul>
            <li v-for="item in this.infoList.casts">
              <img :src="item.avatars.small" alt="avatar">
              <h4>{{item.name}}</h4>
            </li>
          </ul>
        </div>

      </div>
    </div>
    
  </div>
</template>

<script>
import Loading from '@/components/Loading'

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
  margin: 0 auto;
  width: 90%;
}

.img {
  display: flex;
  margin-bottom: 1rem;
}

.img img {
  padding: 1rem;
}

.img .sub-info {
  padding-left: 1rem;
}


.btn {
  display: flex;
  margin-bottom: 1rem;
}

.mu-raised-button-wrapper {
  padding: 0 1.3rem;
}


.img .sub-info li {
  display: inline-block;
  text-align: center;
  background: #eee;
  width: 2.6rem;
  height: 1.4rem;
  border-radius: 1rem;
}
.img .sub-info ul{
  margin: 0;
  padding: 0;
}

a {
  display: block;
  height: 2rem;
  margin-right: 1rem;
  line-height: 2rem;
  font-size: 1rem;
  text-align: center;
  color: #009688;
  border: .1rem solid #009688;
  border-radius: .3rem;
  -ms-flex: 1;
  flex: 1;
}

span {
  margin: 0 0 1.1rem;
  font-size: 1.1rem;
  color: #aaa;
}

ul {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

li {
  display: inline-block;
  margin-left: 1rem;
  max-width: 30%;
}

li h4 {
  line-height: 1.1rem;
}

p {
  font-size: 0.8rem;
}
</style>
