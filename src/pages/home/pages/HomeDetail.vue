<template>
  <div class="detail">
    <div class="header" :style="{ color: phoneData.color }">
      <i class="iconfont">&#xe69f;</i>{{ phoneData.title }}
    </div>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in phoneData.goods"
        :key="index"
      >
        <img :src="item.image" alt="" />
        <p class="p1">{{ item.price }}</p>
        <p class="p2">{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeDetail',
  props: {
    phoneData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.detail {
  width: 100%;
  text-align: center;
}
.header {
  line-height: 15vw;
  height: 15vw;
  font-size: 20px;
}
.header i {
  font-size: 20px;
}
.main {
  display: flex;
  flex-wrap: wrap;
}
.content {
  width: calc(50vw - 2px);
  margin-right: 2px;
  margin-bottom: 2px;
  background-color: #fff;
}
img {
  width: 40vw;
  margin: auto;
  margin-top: 15px;
}
.p1 {
  margin-top: 15px;
  color: #e952a7;
}
.p2 {
  margin: 10px 0;
}
</style>
