<template>
  <div class="header" :style="{ borderColor: hColor }">
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
  border-left: 5px solid;
  background-color: #fff;
}
</style>
