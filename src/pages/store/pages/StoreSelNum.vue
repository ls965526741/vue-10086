<template>
  <div class="sel">
    <header-item
      :hColor="selnumData.color"
      :hTitle="selnumData.title"
    ></header-item>
    <div class="main" v-if="selnumData.goods">
      <img :src="image1" alt="" />
      <img :src="image2" alt="" />
      <img :src="image3" alt="" />
    </div>
  </div>
</template>
<script>
import HeaderItem from './HeaderItem.vue'
export default {
  name: 'StoreSelNum',
  components: {
    HeaderItem
  },
  props: {
    selnumData: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    image1() {
      return this.selnumData?.goods[0]?.image
    },
    image2() {
      return this.selnumData?.goods[1]?.image
    },
    image3() {
      return this.selnumData?.goods[2]?.image
    }
  }
}
</script>
<style scoped>
</style>
