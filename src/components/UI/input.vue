<template>
  <div class="l-input">
    <div
      class="lebel"
      :style="{ width: `${labelWidth}px`, fontSize: `${labelSize}px` }"
      @click="$refs.input.focus()"
    >
      {{ label }}
    </div>
    <input
      :type="type"
      ref="input"
      :placeholder="placeholder"
      :value="value"
      @change="getInputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'l-input',
  props: {
    name: {
      type: String,
      default: '用户名'
    },
    label: {
      type: String,
      default: '用户名'
    },
    placeholder: {
      type: String,
      default: '请输入用户名'
    },
    labelWidth: {
      type: String,
      default: '60'
    },
    labelSize: {
      type: String,
      default: '12'
    },
    type: {
      type: String,
      default: 'text'
    },
    value: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {}
  },
  methods: {
    getInputValue(e) {
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style lang="less" scoped>
.l-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #fff;
  .lebel {
    width: 80px;
  }
  input {
    font-size: 12px;
  }
}
</style>
