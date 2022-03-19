<template>
  <div class="back-top">
    <i class="iconfont">&#xe67a;</i>
  </div>
</template>
<script>
export default {
  name: 'BackTop'
}
</script>
<style scoped>
.back-top {
  position: fixed;
  right: 12px;
  bottom: 65px;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: #fff;
  opacity: 0.5;
  text-align: center;
  line-height: 40px;
  font-weight: 700;
  z-index: 10;
}
.back-top i {
  font-size: 30px;
}
</style>
