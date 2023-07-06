<template>
  <el-container class="container">
<!-- 头部信息 -->
<el-header height="65px" >
  <div class="login-link">
    <router-link to="/login">注册</router-link>
  </div>
  <span style="display:inline-block;margin-top:8px;">简题 · 在线刷题</span>
  <img src="../assets/logo.png" style="float:left;padding-left:5%;width:60px;height:60px;" alt="your-image-alt">
  <!-- 用户头像 -->
  <div class="block">
      <el-avatar shape="square" :size="50" :src="squareUrl" style="float:right;position: relative;top:-37px" />
    </div>
</el-header>
<el-divider />

<!-- 导航栏 -->
<el-container>
  <el-aside width="230px">
<el-menu
  default-active="1"
  class="el-menu-vertical-demo"
  background-color="#ffffff"
  text-color="#000000" 
  router="true"
  >
  <!-- 不用改动 -->
  <el-menu-item index="userinfo">  
    <i class="el-icon-user-solid" style=""></i>
    <span slot="title" style="font-size:17px;">个人资料</span>
  </el-menu-item>
  <el-menu-item index="2">
    <i class="el-icon-goods"></i>
    <span slot="title" style="font-size:17px;">购买题库</span>
  </el-menu-item>
  <el-menu-item index="3">
    <i class="el-icon-folder"></i>
    <span slot="title" style="font-size:17px;">我的题库</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-time"></i>
    <span slot="title" style="font-size:17px;">历史数据</span>
  </el-menu-item>
  <el-menu-item index="5">
    <i class="el-icon-warning-outline"></i>
    <span slot="title" style="font-size:17px;">使用说明</span>
  </el-menu-item>
</el-menu>
</el-aside>
  <el-container>


<!-- 主要页面 -->
    <el-main><el-divider/>
    <el-breadcrumb :separator-icon="ArrowRight">
<!-- <el-breadcrumb-item :to="{ path: '/Main/problems' }" style="font-size:22px;">选中导航（待写）</el-breadcrumb-item> -->
<router-view>  </router-view>
    </el-breadcrumb>
    
    </el-main>

<!-- 底部信息 -->
    <el-footer height="40px" class="footer-text">有问题联系qq:494407383</el-footer>
  </el-container>
</el-container>
</el-container>

  
</template>

<script>
export default {
    name:'MainPage'
}
</script>

<style>
 .container{
      height: 100%;
      /* background-color:  */
  }
  .el-header {
  background-color:rgb(164, 172, 187) ;
  font-size: 28px;
}
.el-aside {
  background-color:#ffffff;
  height: inherit;
  color:#000000;
}
.el-main {
  background-color: #f0f3f8;
}
.el-footer {
  background-color:#f0f3f8;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-text{
  color: gray;
}
.el-menu-item.is-active{
  font-weight: bold;
}
.login-link{
  position: absolute;
  right: 75px;
  top:25px;
  font-size: 20px;
}
</style>