<template>
  <mu-appbar title="Toxicfy">

    <mu-flat-button label="电影" slot="right" to='/movie' />
    <mu-flat-button label="图书" slot="right" to='/article'/>
    <mu-flat-button label="日志" slot="right" to= "/schedule" />
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
