<template>
  <div class="re-tools">
    <div class="header">
      <i class="iconfont">&#xe6a5;</i> {{ saveDbGoods.title }}
    </div>
    <div class="main">
      <div
        class="re-item"
        v-for="(item, index) in saveDbGoods.goods"
        :key="index"
      >
        <div class="left1">
          <span class="span1">{{ item.tedian }}</span
          ><br />
          <span class="span2">{{ item.h2 }}</span>
        </div>
        <div class="rignt1">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RecommendTools',
  props: {
    saveDbGoods: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.re-tools {
  width: 100%;
}
.header {
  line-height: 15vw;
  height: 15vw;
  text-align: center;
  font-size: 20px;
  color: #60b014;
}
.header i {
  font-size: 20px;
}
.main {
  display: flex;
}
.re-item {
  background-color: #fff;
  width: 50vw;
  height: 38vw;
  /* border-right: 1px solid red; */
  margin-right: 2px;
  padding-top: 15px;
  padding-left: 15px;
}
.span1 {
  color: #333333;
}
.span2 {
  color: #999999;
  font-size: 12px;
}
.rignt1 {
  direction: rtl;
  height: 100%;
  padding-right: 10px;
}
img {
  width: 20vw;
  height: 20vw;
}
</style>
