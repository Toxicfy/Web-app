<template>
  <div class="footer">
    <div class="info">
      <img src='../assets/logo.png' alt="下载">
      <div class="info-content">
        <strong>豆瓣</strong>
        <div>我们的精神角落</div>
      </div>
    </div>
    <a href="https://www.douban.com/doubanapp/frodo?channel=nimingye&referer=https%3A%2F%2Fwww.douban.com%2F&wechat=0&os=Windows#page2">点击下载豆瓣客户端</a>
  </div>
</template>

<script>
export default {
  name: 'footer',
  data() {
    return {}
  }
}
</script>

<style scoped>
.footer {
  margin: 5rem 0 0 0;
  padding: 0 0 2rem 0;
  font-size: 1.1rem;
  text-align: center;
}

.info {
  display: inline-block;
  margin: 0 auto 1.5rem;
  overflow: hidden;
  text-align: left;
  font-size: 1.2rem;
}

img {
  float: left;
  width: 4rem;
  height: 4rem;
  margin-right: 1.3rem;
}

.info-content {
  overflow: hidden;
}

strong {
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.3rem;
}

.footer a:last-child {
  margin-left: -1.5rem;
  display: block;
  color: #009688;
  text-decoration: none;
}
</style>