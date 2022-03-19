<template>
  <div class="header" :style="{ color: hColor }">
    {{ hTitle }}
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: ['hColor', 'hTitle']
}
</script>
<style scoped>
.header {
  height: 15vw;
  font-size: 20px;
  text-align: center;
  line-height: 15vw;
}
</style>
