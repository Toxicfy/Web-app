<template>
  <div>
    <HeaderBar></HeaderBar>
    <div id="app">
      <router-view></router-view>
    </div>
    <FooterLine></FooterLine>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import FooterLine from '@/components/FooterLine'

export default {
  name: 'app',
  components: {
    HeaderBar,
    FooterLine
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  min-height: 550px;
}

ul,
li {
  list-style: none;
}
</style>
