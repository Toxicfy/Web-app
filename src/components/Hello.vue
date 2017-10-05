<template>
  <div>

    <mu-paper :zDepth="2">
      <mu-appbar title=''>
        <mu-icon-button icon='menu' slot="left" />
      </mu-appbar>
      <mu-tabs :value="activeTab" @change="handleTabChange">
        <mu-tab value="tab1" title="abc" />
        <mu-tab value="tab2" title="cde" />
      </mu-tabs>
    </mu-paper>
    <div v-if="activeTab === 'tab1'">
      <h2>Tab One</h2>
      <p>
        这是第一个 tab
      </p>
    </div>
    <div v-if="activeTab === 'tab2'">
      <h2>Tab Two</h2>
      <p>
        这是第二个 tab
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      activeTab: 'tab1',
    };
  },
  methods: {
    handleTabChange(val) {
      this.activeTab = val;
    }
  },
  created() {
    // console.log(axios);
    // axios.get('/api/movie/in_theaters',{city:"武汉"})
    //   .then((res) => {
    //       if(res.data.start === 0) {
    //         console.log(res.data.title);
    //         this
    //       }
             
    //   })
  }
};

</script>

<style lang="css">

</style>