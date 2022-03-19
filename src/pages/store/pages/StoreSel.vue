<template>
  <div class="sel">
    <header-item :hColor="selData.color" :hTitle="selData.title"></header-item>
    <div class="main">
      <div class="content" v-for="(item, index) in selData.goods" :key="index">
        <img :src="item.image" alt="" />
        <div class="p1">{{ item.p1 }}</div>
        <div class="p2">{{ item.p2 }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderItem from './HeaderItem.vue'
export default {
  name: 'StoreSel',
  components: {
    HeaderItem
  },
  props: {
    selData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>
<style scoped>
.sel {
  background-color: #fff;
}
.main {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.content {
  width: 50vw;
  text-align: center;
}
img {
  width: 30vw;
  margin: 0 auto;
  padding-bottom: 5px;
}
.p2 {
  padding: 5px 0;
}
</style>
