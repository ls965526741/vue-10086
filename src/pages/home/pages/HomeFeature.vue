<template>
  <div class="home-feature">
    <home-header
      :hColor="featureData.color"
      :hTitle="featureData.title"
    ></home-header>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in featureData.goods"
        :key="index"
      >
        <div class="left">
          <p class="p1">{{ item.p1 }}</p>
          <p class="p2">{{ item.p2 }}</p>
        </div>
        <div class="right">
          <img :src="item.images" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'HomeFeature',
  components: {
    HomeHeader
  },
  props: {
    featureData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.main {
  display: flex;
  flex-wrap: wrap;
}
.content:nth-child(2n + 1) {
  margin-right: 2px;
}
.content {
  padding: 15px 0;
  padding-left: 15px;
  width: calc(50vw - 1px);
  margin-bottom: 2px;
  background-color: #fff;
}
.p1 {
  margin-top: 10px;
  font-size: 16px;
}
.p2 {
  margin-top: 5px;
  font-size: 12px;
  color: #999999;
}
img {
  width: 15vw;
  padding-right: 5px;
}
</style>
