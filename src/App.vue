<template>
  <div>
    <HeaderBar></HeaderBar>
    <div id="app">
      <router-view></router-view>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Footer from '@/components/Footer'

export default {
  name: 'app',
  components:{
    HeaderBar,
    Footer
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 500px;
}
</style>
