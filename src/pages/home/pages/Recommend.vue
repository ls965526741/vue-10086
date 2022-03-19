<template>
  <div class="recommend">
    <div class="re-item" v-for="(item, index) in image" :key="index">
      <img :src="item.images" alt="" />
      <span>{{ item.title }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Recommend',
  props: {
    image: {
      type: Array,
      defaule() {
        return []
      }
    }
  }
}
</script>
<style scoped>
.recommend {
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  width: 100%;
  height: 40vw;
  font-size: 14px;
  background-color: #fff;
}
.re-item {
  width: 20%;
}
img {
  width: 60%;
  margin: auto;
  padding-top: 20%;
}
</style>
