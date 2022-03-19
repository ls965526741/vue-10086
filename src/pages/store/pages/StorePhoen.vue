<template>
  <div class="sel">
    <header-item
      :hColor="phoneData.color"
      :hTitle="phoneData.title"
    ></header-item>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in phoneData.goods"
        :key="index"
      >
        <img :src="item.image" alt="" @load="storeImgLoad" />
        <p>{{ item.p1 }}</p>
        <p>{{ item.p2 }}</p>
        <p>{{ item.price }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderItem from './HeaderItem.vue'
export default {
  name: 'StorePhoen',
  components: {
    HeaderItem
  },
  props: {
    phoneData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    storeImgLoad() {
      this.$emit('storeImgLoad')
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
