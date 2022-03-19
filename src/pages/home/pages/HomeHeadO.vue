<template>
  <nav-bar class="nav-bar">
    <template slot="left">
      <img class="left" src="/img/images/logo3.png" alt="" />
    </template>
    <template slot="center">
      <div class="center">
        <span>宁波</span>
        <img src="/img/images/down2.png" alt="" />
      </div>
    </template>
    <template slot="right"> 请登录 </template>
  </nav-bar>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar'
export default {
  name: 'HomeHeaderO',
  components: {
    NavBar
  }
}
</script>
<style scoped>
.nav-bar {
  position: fixed;
  top: 0;
  z-index: 1;
  color: #fff;
  font-size: 14px;
  background: -webkit-linear-gradient(0deg, transparent, #606266);
  background: linear-gradient(0deg, transparent, #606266);
  opacity: linear-gradient(0deg, 0.5, 0);
}
.left {
  margin-top: 10px;
}
.center {
  font-size: 12px;
  line-height: 44px;
  text-align: left;
  padding-left: 5px;
}
.center img {
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-left: 10px;
}
</style>
