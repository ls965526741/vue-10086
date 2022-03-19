<template>
  <div class="swiper">
    <swiper class="swiper">
      <swiper-item v-for="(item, index) in image" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/common/swiper'
export default {
  name: 'HomeSwiper',
  props: {
    image: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
}
</script>
<style scoped>
.swiper {
  height: 140.5px;
}
</style>
