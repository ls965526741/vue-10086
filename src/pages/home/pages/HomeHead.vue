<template>
  <div class="header">
    <div class="content">
      <div class="left"><img src="/img/images/logo1.png" alt="" /></div>
      <div class="center">
        <span>宁波</span>
        <img src="/img/images/down.png" alt="" />
      </div>
      <div class="right">
        <img src="/img/images/icon-search_b.png" alt="" />
        <img src="/img/images/more.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHead'
}
</script>
<style scoped>
.content {
  display: flex;
  width: 100%;
  height: 44px;
  background-color: #f2f2f2;
}
.left {
  flex: 3;
}
.left img {
  height: 20px;
  margin-top: 12px;
  margin-left: 5px;
}
.center {
  flex: 5;
  margin-top: 16px;
  text-align: center;
  font-size: 12px;
}
.center img {
  width: 10px;
  height: 10px;
  display: inline-block;
  margin-left: 5px;
}
.right {
  display: flex;
  flex: 2;
  width: 20vw;
  justify-content: space-around;
}
.right img {
  width: 5vw;
  height: 19px;
  margin-top: 12px;
}
</style>
