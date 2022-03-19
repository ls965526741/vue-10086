<template>
  <div class="home-favourite">
    <home-header
      :hColor="favouriteData.color"
      :hTitle="favouriteData.title"
    ></home-header>
    <div class="main">
      <div
        class="content"
        v-for="(item, index) in favouriteData.goods"
        :key="index"
      >
        <img :src="item.image" alt="" @load="imageLoad" />
        <p>{{ item.p1 }}</p>
        <p>{{ item.p2 }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import HomeHeader from './HomeHeader.vue'
export default {
  name: 'HomeFavourite',
  components: {
    HomeHeader
  },
  props: {
    favouriteData: {
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
.main {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: center;
}
.content {
  width: 33vw;
  background-color: #fff;
  /* padding-top: 10px; */
  padding: 10px 5px 0 5px;
  margin-bottom: 2px;
  height: 37vw;
}
img {
  width: 22vw;
  margin: 0 auto;
}
p {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
p:nth-child(2n) {
  margin: 5px 0;
}
p:nth-child(2n + 1) {
  font-size: 12px;
}
</style>
