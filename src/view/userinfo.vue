<template>
    <div class="self">
        <div style="width: 100%;height: 10vh; ">
            <h2 style="font-size: 30px;"><i class="el-icon-user"></i>个人资料</h2>
            <el-divider/>
        </div>
        
        <!-- 头像部件 -->
    
    <div class="self1" 
    style="display: flex; 
    flex-direction: row; 
    justify-content: center;
     align-items: center;">
        <div style="
            flex: 1;
            width: auto;
            height: inherit;
            display: inline-block;">
            <el-card 
                class="box-card" 
                shadow="always" 
                style="overflow: visible;
                background-color: #f7fbfc;
                border-radius: 20px;">
                  <div slot="header" class="clearfix">
                    <el-avatar :size="100" :src="require(`../assets/tx.png`)" class="self-img"></el-avatar>
                    <el-button style="float: right; padding: 3px 0" type="text">点击修改基础信息</el-button>
                  </div>
                  <div class="IdCard">
                    <div class="text item" style="font-size: 1.2vw;font-weight: bold;">
                  用户名：{{ /* 后台获取 */ }} 我已经在做了！
                </div>
                <div class="text item" style="font-size: 0.9vw;">
                  邮箱：{{ /* 后台获取 */ }} 494407383@qq.com
                </div>
                <div class="text item" style="font-size: 0.7vw;">
                  个性签名：{{ /* 后台获取 */ }} 牛！
                </div>
                  </div>
                  
            </el-card>
        </div>

        <div class="money">
            钱包余额：
            <div class="money2">
                &nbsp; {{ 100.01 }}    &nbsp;    CNY
                    <div class="chongzhi">
                <el-button>充值余额</el-button>
                <div style="display: inline-block;height: inherit;width: 2vw;;"></div>
                <el-button>充值记录</el-button>
                    </div>
            </div>
        </div>
    </div>

    <!-- 下方组件 -->
    <div style="overflow: hidden;">
      <el-divider/>
      <div class="change-ps-wrapper">
        <div class="change-ps" >
            <div style="margin: 2vh 2vw;">
              <h3 style="margin: 0;font-size: large;font-weight: 300;">修改密码</h3>
            </div>
            <div class="change-body">
              <div class="change-from">
                <p>旧密码：</p>
                <el-input placeholder="请输入原密码" class="plsInput"></el-input>              
              </div>
              <div class="change-from">
                <p>新密码：</p>
                <el-input placeholder="请输入新密码" class="plsInput"></el-input>              
              </div>
              <div class="change-from">
                <p>确认密码：</p>
                <el-input placeholder="请确认密码" class="plsInput"></el-input>              
              </div>
            <div class="Save">
              <el-button type="primary" round >保存修改</el-button>
            </div>
            </div>
        </div>
      </div>
    </div>
</div>


</template>



<script>

export default({

})

</script>

<style scoped>
/* 头像部件设置 */
.self{
    height: 80vh;
    /* overflow: hidden; */
    min-width: 500px;
}
.self1{
    display: flex;
    height: 20vh;
    /* margin-top: 5%; */
    min-width:1200px;
}
.self-img{
    position: relative;
    top: -8vh;
    left: -9vh;
    
}

.IdCard{
  display: flex;
  flex-direction: column;
}
  .item {
    /* margin-bottom: 20px; */
    height: 3vh;
    flex: 1;
    min-height: 40px;
  }

  .clearfix:before,
  .clearfix:after {
    display:table;
    content: "";
  }.clearfix{
    display: block;
    height: 10px;
  }
  .clearfix:after {
    clear: both
  }
/* 卡片整体设置 */
  .box-card {
    flex: 1;
    width: 450px;
    height: 20vh;
    display: flex;
    flex-direction: column;
    /* place-content: center center; */
    margin-left: 20%;  
  }
  .money{
    flex: 1;
    display: inline-block;
    font-size: 14px;
    height: inherit;
    color:gray;
    position: relative;
    /* left: -11vw; */
    
  }
  .money .money2{
    color: black;
    font-size: 2.4vw;
    font-weight: 500 ;
    width:500px;
    margin-top: 20px;
  }
  .chongzhi{

  }
  .chongzhi el-button {
  flex-grow: 1; /* 两个按钮宽度平分 */
  margin: 0 5px; /* 设置按钮间距 */
}
  /* 修改密码组件 */
.change-ps-wrapper {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  height: auto; /* 设置高度为整个视口的高度 */
  border-radius: 10px;
}

.change-ps {
  width: 60vw; /* 设置宽度为所需宽度 */
  background-color: #f5f5f5;
  border-radius: 8px;
}
.change-body {
  display: flex;
  background-color: #ffffff;
  padding: 2vw 2vh;
  flex: 1;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  height: 28vh;
}
.change-from>p {
  font-weight: 600;
  font-size: large;
}
.plsInput{
  width: 40%;
}
.change-from input {
  flex-grow: 1;
}
.Save{
  text-align: right;
}
</style>
