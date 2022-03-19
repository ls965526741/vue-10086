<template>
  <div class="profile">
    <swiper>
      <swiper-item v-for="(item, index) in saveImage" :key="index">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
    <div>
      <span @click="$router.push('/login')">登陆</span>
      <span @click="$router.push('/register')">注册</span>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperItem } from '@/components/swiper'
export default {
  name: 'Profile',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      saveImage: [
        '/img/profile/proswp0.png',
        '/img/profile/proswp1.jpg',
        '/img/profile/proswp2.png'
      ]
    }
  },
  created() {}
}
</script>
