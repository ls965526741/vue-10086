<template>
  <div class="home">
    <home-head-o v-show="isShow"></home-head-o>
    <scroll
      class="scroll"
      ref="scroll"
      :probeType="3"
      :listenScroll="true"
      @scroll="contentScroll"
    >
      <home-head></home-head>
      <home-swiper :image="saveSwiperImg"></home-swiper>
      <recommend :image="saveRecommendImg"></recommend>
      <div class="write"></div>
      <img class="ad" src="/img/adtrue.jpg" alt="" />
      <recommend-tools :saveDbGoods="saveFamilyJoin"></recommend-tools>
      <home-detail :phoneData="savePhone"></home-detail>
      <business-detail :businessData="saveBusiness"></business-detail>
      <number-detail :numberData="saveNumber"></number-detail>
      <home-feature :featureData="saveFeature"></home-feature>
      <home-favourite
        :favouriteData="saveFavourite"
        @imageLoad="imageRefresh"
      ></home-favourite>

      <div class="footer">
        <p>京ICP备05002571号 证照信息</p>
        <p>Copyright©1999-2021 中国移动 版权所有</p>
        <p>本网站支持IPv6访问</p>
      </div>
    </scroll>
    <back-top v-show="topShow" @click.native="backTop"></back-top>
  </div>
</template>
<script>
import HomeHead from './pages/HomeHead.vue'
import HomeSwiper from './pages/HomeSwiper.vue'
import Recommend from './pages/Recommend.vue'
import RecommendTools from './pages/RecommendTools.vue'
import HomeDetail from './pages/HomeDetail.vue'
import BusinessDetail from './pages/BusinessDetail.vue'
import NumberDetail from './pages/NumberDetail.vue'
import HomeFeature from './pages/HomeFeature.vue'
import HomeFavourite from './pages/HomeFavourite.vue'
import HomeHeadO from './pages/HomeHeadO.vue'
import BackTop from '@/components/backtop/BackTop'
import Scroll from '@/components/scroll/Scroll.vue'
import { debounce } from '@/common/utils'
export default {
  name: 'Home',
  data() {
    return {
      saveSwiperImg: [],
      saveRecommendImg: [],
      saveFamilyJoin: {},
      savePhone: {},
      saveBusiness: {},
      saveNumber: {},
      saveFeature: {},
      saveFavourite: {},
      refresh: {},
      isShow: false,
      topShow: false
    }
  },
  components: {
    HomeHead,
    HomeSwiper,
    Recommend,
    RecommendTools,
    HomeDetail,
    BusinessDetail,
    NumberDetail,
    HomeFeature,
    HomeFavourite,
    HomeHeadO,
    Scroll,
    BackTop
  },
  methods: {
    getData() {
      this.$http.get('/home/homeswiper').then((res) => {
        this.saveSwiperImg = res.data.homeSwiper
        this.saveRecommendImg = res.data.homeRecommend
        this.saveFamilyJoin = res.data.familyJoin
        this.savePhone = res.data.phone
        this.saveBusiness = res.data.business
        this.saveNumber = res.data.phoneNumber
        this.saveFeature = res.data.feature
        this.saveFavourite = res.data.favourite
        // console.log(JSON.stringify(this.saveFavourite, null, 2));
      })
    },
    imageRefresh() {
      this.refresh()
    },
    contentScroll(pos) {
      if (-pos.y > 44) this.isShow = true
      else this.isShow = false
      if (-pos.y > 800) this.topShow = true
      else this.topShow = false
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    }
  },
  created() {
    this.getData()
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 20)
  }
}
</script>
<style scoped>
/* home-swiper {
  height: 140.5px;
  overflow: hidden;
} */
.home {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  overflow: hidden;
}
.write {
  width: 100%;
  height: 20px;
  background-color: #fff;
}
.footer {
  text-align: center;
  padding-bottom: 20px;
}
.footer p {
  margin-top: 20px;
}
.scroll {
  /* position: absolute;
  bottom: -49px; */
  height: calc(100% - 44px);
}
</style>
