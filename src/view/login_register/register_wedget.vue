<template>
  <div class="register-form">
    <div class="logo">
      <img src="@/assets/logo.png" alt="Logo" />
      <h1>简题</h1>
    </div>
    <el-form ref="registerForm" :model="registerData" :rules="rules" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="registerData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="registerData.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="confirmPassword">
        <el-input type="password" v-model="registerData.confirmPassword"></el-input>
      </el-form-item>
    </el-form>
    <div class="register-button">        <el-button type="primary" @click="register">注册</el-button></div>
  </div>
</template>

<script>
const genPassword = require('./gen_password')
import router from '@/router'


export default {
  name:'Register',
  data() {
    return {
      registerData: {
        username: '',
        password: '',
        confirmPassword: ''
      },
      rules:{
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, message: '密码长度不能少于6个字符', trigger: 'blur' }
        ],
        confirmPassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          {
            validator: (rule, value, callback) => {
              if (value !== this.registerData.password) {
                callback(new Error('两次输入的密码不一致'))
              } else {
                callback()
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    register() {
      // 注册逻辑
      
      this.$refs.registerForm.validate(async (valid) => {
      if (valid) {
        // 表单验证通过，执行注册逻辑

        // 这里可以通过发送网络请求将注册数据发送给后端进行处理
        // 示例代码中使用console.log打印注册数据
        console.log(this.registerData);

        var password = this.registerData.password

        password = genPassword(password)


      // 发送请求
      let loginForm = {
        username: this.registerData.username,
        password: password,
      }

      try{
        const {data:res} = await this.$http.post("register",loginForm)

        if(res.meta.status !== 200){
          return this.$message.error(res.meta.msg);
        }

        this.$message.success('注册成功!')

        this.$emit('changeIndex', 0)

      }catch(e){
        this.$message.error(e)
      }


      } else {
        // 表单验证不通过，显示错误信息
        console.log('表单验证不通过');
      }
    });


    }
  }
}
</script>

<style scoped>

.register-button{
  display: flex;
  align-items: center;
  justify-content: center;
}

.register-form {
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
