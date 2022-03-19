<template>
  <div class="sel">
    <header-item
      :hColor="businessnData.color"
      :hTitle="businessnData.title"
    ></header-item>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in businessnData.goods"
        :key="index"
      >
        <img :src="item.image" alt="" />
        <p>{{ item.p1 }}</p>
        <p>{{ item.p2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderItem from './HeaderItem.vue'
export default {
  name: 'StoreBusiness',
  components: {
    HeaderItem
  },
  props: {
    businessnData: {
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
  text-align: center;
}
.content {
  width: calc(50% - 1px);
  background-color: #fff;
  padding: 5px 0;
}
.content:nth-child(2n-1) {
  margin-right: 2px;
}
.content:nth-child(n + 3) {
  margin-top: 2px;
}
img {
  width: 40%;
  margin: 0 auto;
}
p {
  margin-top: 5px;
}
</style>
