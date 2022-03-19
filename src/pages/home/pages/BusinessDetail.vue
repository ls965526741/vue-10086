<template>
  <div class="business">
    <div class="header" :style="{ color: businessData.color }">
      <i class="iconfont">&#xe6c2;</i>{{ businessData.title }}
    </div>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in businessData.goods"
        :key="index"
      >
        <div class="left">
          <p class="p1">{{ item.dis }}</p>
          <p class="p2">{{ item.dis1 }}</p>
        </div>
        <div class="right">
          <img :src="item.image" alt="" />
        </div>
      </div>
    </div>
    <div class="footer">
      {{ businessData.more }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'BusinessDetail',
  props: {
    businessData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.header {
  height: 15vw;
  font-size: 20px;
  text-align: center;
  line-height: 15vw;
}
.header i {
  font-size: 20px;
}
.main {
  display: flex;
}
.content {
  padding: 15px 0;
  padding-left: 15px;
  width: calc(50vw - 2px);
  margin-right: 2px;
  background-color: #fff;
}
.p1 {
  font-size: 16px;
}
.p2 {
  font-size: 12px;
  color: #999999;
}
img {
  width: 15vw;
}
.footer {
  margin-top: 2px;
  height: 15vw;
  width: 100%;
  line-height: 15vw;
  font-size: 18px;
  text-align: center;
  background-color: #fff;
}
</style>
