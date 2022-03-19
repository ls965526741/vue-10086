<template>
  <div class="dis-item">
    <div class="header">
      <h5>{{ discountsData.header }}</h5>
    </div>
    <div class="title">
      <span>{{ discountsData.title }}</span>
      <a href="#">去登陆<i class="iconfont">&#xe6ca;</i></a>
    </div>
    <div
      class="content"
      v-for="(item, index) in discountsData.goods"
      :key="index"
    >
      <img :src="item.image" alt="" @load="imageLoad" />
      <div class="title">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DiscountsItem',
  props: {
    discountsData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>
<style scoped>
.header {
  width: 100%;
  height: 44px;
  background-color: #f5f5f5;
  text-align: center;
  line-height: 44px;
  font-size: 22px;
}
.title {
  width: 100%;
  height: 44px;
  line-height: 44px;
  font-size: 14px;
}
a {
  padding-left: 5px;
  color: #0085d0;
}
img {
  padding: 0 5px;
}
</style>
