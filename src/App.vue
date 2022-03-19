<template>
  <div id="app">
    <keep-alive>
      <!-- exclude="GoodsDetail" -->
      <router-view />
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>
<script>
import MainTarBar from '@/components/tarbar/MainTarBar.vue'
export default {
  methods: {},
  components: {
    MainTarBar
  }
}
</script>
<style scoped>
@import './assets/css/base.css';
#app {
  width: 100vw;
  height: 100vh;
}
</style>
