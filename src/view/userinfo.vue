<template>
    <div class="self">
        <div style="width: 100%;height: 10vh;">
            <h2>个人资料</h2>
            <el-divider/>
        </div>
        
        <!-- 头像部件 -->
    
    <div class="self1">
        <div style="
            flex: 1;
            width: auto;
            height: inherit;display: inline-block;">
            <el-card 
                class="box-card" 
                shadow="always" 
                style="overflow: visible;background-color: #f7fbfc;border: 100px;border-radius: 20px;">
                  <div slot="header" class="clearfix">
                    <el-avatar :size="120" :src="require(`../assets/tx.png`)" class="self-img"></el-avatar>
                    <el-button style="float: right; padding: 3px 0" type="text">点击修改基础信息</el-button>
                  </div>
                  <div class="text item" style="font-size: 25px;font-weight: bold;">
                  用户名：{{ /* 后台获取 */ }}
                </div>
                <div class="text item" style="font-size: 18px;">
                  邮箱：{{ /* 后台获取 */ }}
                </div>
                <div class="text item">
                  个性签名：{{ /* 后台获取 */ }}
                </div>
                <el-divider/>
            </el-card>
        </div>

        <div class="money">
            钱包余额：
            <div class="money2">
                &nbsp; {{ 100.01 }}    &nbsp;    CNY
                    <div class="chongzhi">
                <el-button>充值余额</el-button>
                <el-button>充值记录</el-button>
                    </div>
            </div>
        </div>
    </div>

    <!-- 下方组件 -->
    <div style="width: inherit;height: auto;">
        
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
}
.self1{
    display: flex;
    /* margin-top: 5%; */
}
.self-img{
    position: relative;
    top: -9vh;
    left: -10vh;
}
.text {
    font-size: 15px;
  }

  .item {
    margin-bottom: 20px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }.clearfix{
    height: 1vh;
  }
  .clearfix:after {
    clear: both
  }
/* 卡片整体设置 */
  .box-card {
    width: 450px;
    height: 20vh;
    margin-left: 20%;  }
  .money{
    display: inline-block;
    font-size: 31px;
    color:gray;
  }
  .money .money2{
    color: black;
    font-size: 57px;
    font-weight: bold ;
    width:500px;
    margin-top: 20px;
  }
  .chongzhi{
    margin-left: 30px;
  }
</style>
