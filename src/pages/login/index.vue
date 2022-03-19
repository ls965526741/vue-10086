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
      <l-button size="medium" type="primary">登陆</l-button>
    </div>
  </div>
</template>

<script>
import { login } from '@/api'
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
      const res = await login({ username, password })
      if (res.code === 200) {
        this.$toast(res.message)
        localStorage.setItem('token', res.result.token)
        localStorage.setItem('userInfo', JSON.stringify(res.result.user_info))
        // this.$router.push('/home')
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
