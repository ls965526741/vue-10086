<template>
  <div class="recommend">
    <div class="main" v-for="(item, index) in recommendData" :key="index">
      <img :src="item.image" alt="" />
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'StoreRecommend',
  props: {
    recommendData: {
      type: Array,
      default() {
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
  width: 100%;
  background-color: #fff;
  padding-top: 10px;
}
.main {
  width: 25vw;
  text-align: center;
}
img {
  width: 15vw;
  margin: 0 auto;
}
p {
  padding: 5px 0;
}
</style>
