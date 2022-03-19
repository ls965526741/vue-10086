<template>
  <div class="number-detail">
    <div class="header">
      <home-header
        :hColor="numberData.color"
        :hTitle="numberData.title"
      ></home-header>
    </div>
    <div class="main">
      <div
        class="left"
        v-for="(item, index) in numberData.recommend"
        :key="index"
      >
        <img :src="item.images" alt="" />
        <p>{{ item.p1 }}</p>
        <span>{{ item.p2 }}</span>
      </div>
      <div class="right">
        <div
          class="content"
          v-for="(item, index) in numberData.goods"
          :key="index"
        >
          <div class="item-left">
            <p>{{ item.p1 }}</p>
            <span>{{ item.p2 }}</span>
          </div>
          <div class="item-right">
            <img :src="item.images" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'NumberDetail',
  components: {
    HomeHeader
  },
  props: {
    numberData: {
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
}
.right,
.left {
  width: calc(50vw - 1px);
}
.right {
  margin-left: 2px;
}
.content {
  display: flex;
  height: calc(25vw);
  margin-bottom: 2px;
  background-color: #fff;
  padding-left: 10px;
  padding-top: 20px;
  /* border-bottom: 2px solid #f2f2f2; */
}
.item-left {
  width: 35vw;
}
.item-right {
  width: 15vw;
}
.left {
  text-align: center;
  background-color: #fff;
  padding-left: 10px;
  padding-top: 10px;
  margin-bottom: 2px;
}
.left img {
  margin: 0 auto;
  width: 25vw;
  margin-bottom: 15px;
}
img {
  width: 10vw;
}
p {
  font-size: 18px;
  color: #333333;
}
span {
  font-size: 12px;
}
</style>
