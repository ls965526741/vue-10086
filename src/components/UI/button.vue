<template>
  <button
    :class="[
      'x-button',
      `x-button-${size}`,
      `button-color-${type}`,
      { disabled: disabled }
    ]"
    :disabled="disabled"
    @click="handleClick"
  >
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script>
function oneOf(value, validList) {
  for (let i = 0; i < validList.length; i++) {
    if (value === validList[i]) {
      return true
    }
  }
  return false
}
export default {
  name: 'l-button',
  components: {},
  props: {
    // 关于size 的校验
    size: {
      validator(value) {
        return oneOf(value, ['small', 'medium', 'large'])
      },
      default: 'small'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'primary'
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(event) {
      this.$emit('handleClick', event)
    }
  }
}
</script>
<style  lang="less" scoped>
.x-button {
  background: #fff;
  border: 1px solid #ccc;
  color: #666;
  padding: 2px 10px;
  cursor: pointer;
  border-radius: 4px;
}
.x-button-medium {
  padding: 3px 15px;
}
.x-button-large {
  padding: 4px 20px;
}
.button-color-primary {
  background-color: #07c160;
  color: #fff;
}
.button-color-info {
  background-color: #1989fa;
  color: #fff;
}
.button-color-default {
  background-color: #ffffff;
}
.button-color-danger {
  background-color: #ee0a24;
  color: #fff;
}
.button-color-warning {
  background-color: #ff976a;
  color: #fff;
}
.disabled {
  background-color: #f5f7fa;
  border-color: #e4e7ed;
  color: #c0c4cc;
  cursor: not-allowed;
  border: 1px solid #dcdfe6;
}
</style>
