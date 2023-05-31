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
const publicPath = process.env.BASE_URL
export default {
  name: 'Profile',
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      saveImage: [
        `${publicPath}/img/profile/proswp0.png`,
        `${publicPath}/img/profile/proswp1.jpg`,
        `${publicPath}/img/profile/proswp2.png`
      ]
    }
  },
  created() {}
}
</script>
