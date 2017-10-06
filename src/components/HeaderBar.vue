<template>
  <mu-appbar title="Toxicfy">
    <mu-flat-button label="电影" slot="right" to='/movie' />
    <mu-flat-button label="图片" slot="right" to='/article'/>
    <mu-icon-button icon="search" slot="right" @click="getback"/>
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
    getback(){
      this.$router.go(-1);
    }
  }
}
</script>

<style scoped lang="css">

</style>
