<template>
  <div class="login-form">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <h1>简题</h1>
    </div>
    <el-form ref="loginForm" :model="loginData" :rules="rules" label-width="70px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginData.password"></el-input>
      </el-form-item>
    </el-form>
    <div class="login-button">
        <el-button type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name:'Login',
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login() {
      // this.$refs.loginForm.validate(valid => {
      //   if (valid) {
      //     // 执行登录逻辑
      //     console.log('登录成功')
      //   } else {
      //     console.log('表单验证失败')
      //     return false
      //   }
      // }    
      // )

      router.push('/')
    }
  }
}
</script>

<style scoped>

.login-button{
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
  max-width: 400px;
  margin: 0 auto;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo img {
  width: 70px;
  height: 70px;
}

.logo h1 {
  margin-left: 10px;
}
</style>
