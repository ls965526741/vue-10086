<template>
  <div>
    <l-input
      v-model="username"
      label="用户名"
      placeholder="请输入用户名"
      type="text"
    />
    <l-input
      v-model="password"
      label="密码"
      placeholder="请输入密码"
      type="password"
    />
    <div class="footer" @click="login">
      <l-button size="medium" type="primary">注册</l-button>
    </div>
  </div>
</template>

<script>
import { register } from '@/api'
export default {
  data() {
    return {
      username: '123123',
      password: '123123'
    }
  },
  methods: {
    async login() {
      const { username, password } = this
      const res = await register({ username, password })
      if (res.code === 200) {
        this.$toast(res.message)
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
