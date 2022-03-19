<template>
  <div class="mian-tar-bar">
    <div
      class="tar-bar-item"
      v-for="(item, index) in tarBarData"
      :key="index"
      @click="tarBarClick(index)"
    >
      <div class="item-top">
        <img v-if="currentIndex !== index" :src="item.image1" alt="" />
        <img v-else :src="item.image2" alt="" />
      </div>
      <div class="item-bottom" :class="{ actived: currentIndex === index }">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MainTarBar',
  data() {
    return {
      currentIndex: 0,
      tarBarData: [],
      path: ['/home', '/store', '/discounts', '/profile']
    }
  },
  methods: {
    getData() {
      this.$http.get('/maintarbar').then((res) => {
        res.data.forEach((item) => (item.isShow = true))
        this.tarBarData = res.data
      })
    },
    tarBarClick(index) {
      if (this.currentIndex !== index) {
        this.currentIndex = index
        this.$router.replace(this.path[index])
      }
    },
    reviseIndex() {
      if (location.pathname.indexOf('/home') !== -1) this.currentIndex = 0
      if (location.pathname.indexOf('/store') !== -1) this.currentIndex = 1
      if (location.pathname.indexOf('/discounts') !== -1) this.currentIndex = 2
      if (location.pathname.indexOf('/profile') !== -1) this.currentIndex = 3
    }
  },

  created() {
    this.getData()
    this.reviseIndex()
  }
}
</script>
<style scoped>
.mian-tar-bar {
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: -1px;
  width: 100%;
  height: 13vw;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 12px;
  background-color: #fff;
}
.tar-bar-item {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  justify-content: center;
  /* background-color: blue; */
}
.item-top {
  flex: 8;
}
img {
  height: 28px;
  width: 28px;
  margin: 0 auto;
}
.item-bottom {
  flex: 2;
}
.actived {
  color: #409eff;
}
</style>
