<template>
  <div class="store">
    <scroll class="scroll" ref="scroll" :probeType="3" @scroll="scrollPosition">
      <swiper class="swiper">
        <swiper-item v-for="(item, index) in saveSwiper" :key="index">
          <img :src="item.image" alt="" />
        </swiper-item>
      </swiper>
      <store-recommend :recommendData="saveRecommend"></store-recommend>
      <store-sel :selData="saveSel"></store-sel>
      <store-phoen
        :phoneData="saveSPhone"
        @storeImgLoad="refreshScroll"
      ></store-phoen>
      <store-phoen :phoneData="saveBusiness"></store-phoen>
      <store-business :businessnData="saveBusiness"></store-business>
      <store-sel-num :selnumData="saveSelNum"></store-sel-num>
      <store-phoen :phoneData="saveAccessories"></store-phoen>
      <store-accessories :accessoriesData="saveAccessories"></store-accessories>
      <div class="footer"></div>
    </scroll>
    <back-top v-show="isShow" @click.native="backTop"></back-top>
  </div>
</template>
<script>
import StoreRecommend from './pages/StoreRecommend.vue'
import StoreSel from './pages/StoreSel.vue'
import StorePhoen from './pages/StorePhoen.vue'
import StoreBusiness from './pages/StoreBusiness.vue'
import StoreSelNum from './pages/StoreSelNum.vue'
import StoreAccessories from './pages/StoreAccessories.vue'
import BackTop from '@/components/backtop/BackTop'
import { Swiper, SwiperItem } from '@/components/swiper'

import { debounce } from '@/common/utils'
import Scroll from '@/components/scroll/Scroll'
export default {
  name: 'Store',
  components: {
    Swiper,
    SwiperItem,
    StoreRecommend,
    StoreSel,
    StorePhoen,
    StoreBusiness,
    StoreSelNum,
    StoreAccessories,
    Scroll,
    BackTop
  },
  data() {
    return {
      isShow: false,
      refresh: {},
      saveSwiper: [],
      saveRecommend: [],
      saveSel: {},
      saveSPhone: {},
      saveBusiness: {},
      saveSelNum: {},
      saveAccessories: {}
    }
  },
  methods: {
    refreshScroll() {
      this.refresh()
    },
    scrollPosition(pos) {
      if (-pos.y > 800) {
        this.isShow = true
      } else this.isShow = false
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0)
    },
    getData() {
      this.$http.get('/store').then((res) => {
        this.saveSwiper = res.data.swiper
        this.saveRecommend = res.data.recommend
        this.saveSel = res.data.sel
        this.saveSPhone = res.data.sphone
        this.saveBusiness = res.data.business
        this.saveSelNum = res.data.selnum
        this.saveAccessories = res.data.accessories
      })
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
.store {
  width: 100%;
  height: calc(100vh - 49px);
  overflow: hidden;
  background-color: #dee1e6;
}
.scroll {
  height: calc(100vh - 49px);
}
.swiper {
  height: 150px;
  overflow: hidden;
}
.footer {
  font-size: 14px;
}
</style>
