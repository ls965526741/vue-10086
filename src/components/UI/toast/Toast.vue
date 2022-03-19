<template>
  <div class="toast" v-show="isShow">
    <span>{{ message }}</span>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  data() {
    return {
      message: '',
      isShow: false
    }
  },
  methods: {
    show(res, outTime = 2000) {
      this.message = res
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, outTime)
    }
  }
}
</script>
<style scoped>
.toast {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  z-index: 999;
  border-radius: 5px;
  font-size: 14px;
  overflow: hidden;
}
.toast span {
  display: block;
  padding: 15px 8px;
}
</style>
