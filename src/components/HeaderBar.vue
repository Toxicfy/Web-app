<template>
  <mu-appbar title="豆瓣">

    <mu-flat-button label="电影" slot="right" to='/movie' />
    <mu-flat-button label="图书" slot="right" to='book'/>
    <mu-flat-button label="广播" slot="right" />
    <!-- <mu-flat-button label="小组" slot="right"/> -->
    <mu-icon-button icon="search" slot="right" />
  </mu-appbar>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    },
  }
}
</script>

<style scoped lang="css">

</style>
