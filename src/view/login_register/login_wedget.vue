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
const genPassword = require('./gen_password')
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
    async login() {
      // 数据校验
      if(this.loginData.username==""||this.loginData.password==""){
        return this.$message.error("请输入账号和密码");
      }

      var encodedPwd = genPassword(this.loginData.password)

      // 发送请求
      let loginForm = {
        username: this.loginData.username,
        password: encodedPwd,
      }

      try{
        const {data:res} = await this.$http.post("login",loginForm)

        if(res.meta.status !== 200){
          return this.$message.error(res.meta.msg);
        }

        this.$message.success('登录成功')
        // app.username = res.data.username
        // app.userid = res.data.userid
        window.sessionStorage.setItem('token',res.data.token)
        // 将用户名存储到组件的数据中
        this.loginData.username = res.data.username;
        console.log(this.loginData.username)
        //存入session
        window.sessionStorage.setItem('username', this.loginData.username);
        router.push('/choicePage')

      }catch(e){
        this.$message.error(e)
      }

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
