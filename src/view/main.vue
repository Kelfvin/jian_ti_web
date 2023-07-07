<template>
  <el-container class="container">
<!-- 头部信息 -->
<el-header height="80px" >
  <div class="login-link">
    <router-link to="/login">点击注销</router-link>
  </div>
  <span style="display:inline-block;margin-top:20px;font-size: 30px;font-weight: bold;">简题 · </span>
  <img src="../assets/logo.png" style="float:left;padding-left:0%;width:80px;height:80px;" alt="your-image-alt">
  <!-- 用户头像 -->
  <div class="block">
      <el-avatar shape="square" :size="50" :src="require(`../assets/tx.png`)" style="float:right;position: relative;top:-45px" />
    </div>
</el-header>

<!-- 导航栏 -->
<el-container>
  <el-aside width="230px">
<el-menu
  default-active="1"
  class="el-menu-vertical-demo"
  background-color="#ffffff"
  text-color="#000000" 
  active-text-color="#000000"
  router="true"
  >
  <!--把数字改为对应的页面-->
  <el-menu-item index="/">
    <i class="el-icon-folder"></i>
    <span slot="title" style="font-size:20px;">我的题库</span>
  </el-menu-item>
  <el-menu-item index="/CardList">
    <i class="el-icon-goods"></i>
    <span slot="title" style="font-size:20px;">购买题库</span>
  </el-menu-item>
  <el-menu-item index="/">
    <i class="el-icon-time"></i>
    <span slot="title" style="font-size:20px;">历史数据</span>
  </el-menu-item>
  <el-menu-item index="/userinfo">  
    <i class="el-icon-user"></i>
    <span slot="title" style="font-size:20px;">个人资料</span>
  </el-menu-item>
  <el-menu-item index="/">
    <i class="el-icon-warning-outline"></i>
    <span slot="title" style="font-size:20px;">使用说明</span>
  </el-menu-item>
  <el-menu-item index="/payCheck">
    <i class="el-icon-goods"></i>
    <span slot="title" style="font-size:20px;">余额充值</span>
  </el-menu-item>
</el-menu>
    <div class="vue-page-container">
      <component :is="yourVuePage"></component>
    </div>
</el-aside>
  <el-container>


<!-- 主要页面 -->
    <el-main>
    <el-breadcrumb :separator-icon="ArrowRight">
      <!-- <router-link to="problems">to the problem</router-link> -->
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
import uploadFile from "../view/uploadFile";
export default {
    name:'MainPage',
    data(){
      return{
        yourVuePage:uploadFile
      }
    }
}
</script>

<style>
  .vue-page-container {
  position: absolute;
  bottom: 10px;
  left: 50px;
  /* 其他样式属性 */
}
 .container{
      height: 100%;
      /* background-color:  */
  }
  .el-header {
  background-color:#BCDDFF;
  font-size: 28px;
}
.el-aside {
  background-color:#ffffff;
  height: inherit;
  color:#000000;
}
.el-main {
  background-color: #f7fbfc;
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