<template>
    <div class="self">
        <div style="width: 100%;height: 5vh;">
            <h2 style="font-size: 30px;"><i class="el-icon-user"></i>个人资料</h2>
            
        </div>
        <el-divider/>
        <!-- 上方部件 不要动-->
    
    <div class="self1" 
    style="display: flex;
    min-height: 200px;
    flex-direction: row; 
    justify-content: center;
     align-items: center;">
        <div style="
            flex: 1;
            min-height: 200px;
            width: auto;
            height: inherit;
            display: inline-block;">
            <el-card 
                class="box-card" 
                shadow="always" 
                style="overflow: visible;
                background-color: #f7fbfc;
                border-radius: 20px;
                height: auto;">
                  <div slot="header" class="clearfix">
                    <el-avatar :size="30" :src="require(`../../assets/1.jpg`)" class="self-img"></el-avatar>
                    <el-button style="float: right; padding: 3px 0" type="text">基础信息</el-button>
                  </div>
                  <div class="IdCard">
                    <div class="text item" style="font-size: 1.2vw;font-weight: bold;">
                  用户名：{{  }} 我已经在做了！
                </div>
                <div class="text item" style="font-size: 0.9vw;">
                  邮箱：{{  }} 494407383@qq.com
                </div>
                <div class="text item" style="font-size: 0.7vw;">
                  个性签名：{{  }} 牛！
                </div>
                  </div>
                  
            </el-card>
        </div>

        <div class="money">
            钱包余额：
            <div class="money2">
                &nbsp; {{ 100.01 }}    &nbsp;    CNY
                    <div class="chongzhi">
                <el-button @click="cz()">充值余额</el-button>
                <div style="display: inline-block;height: inherit;width: 2vw;;"></div>
                <el-button @click="czrecord()">充值记录</el-button>
                    </div>
            </div>
        </div>
    </div>

    <!-- 下方组件 -->
    <div style="overflow: hidden;">
      <el-divider/>
      <div class="change-ps-wrapper ">
        <div class="change-ps">
            <div style="margin: 2vh 2vw;">
              <h3 style="margin: 0;font-size: large;font-weight: 300;">修改密码</h3>
            </div>
            <div class="change-body" style="height: auto;">
              <div class="change-from">
                <p>旧密码：</p>
                <el-input placeholder="请输入原密码" class="plsInput" v-model="oldpas" clearable></el-input>              
              </div>
              <div class="change-from">
                <p>新密码：</p>
                <el-input placeholder="请输入新密码" class="plsInput" v-model="newpas" clearable></el-input>              
              </div>
              <div class="change-from">
                <p>确认密码：</p>
                <el-input placeholder="请确认密码" class="plsInput" v-model="newpas2" clearable></el-input>              
              </div>
            <div class="Save">
              <el-button type="primary" round @click="changeps()">保存修改</el-button>
            </div>
            </div>
        </div>
      </div>
    </div>
</div>

</template>



<script>
  import axios from "axios"
  import genPassword from "../login_register/gen_password"
export default{
  data() {
    return {
      oldpas:'',
      newpas: '',
      newpas2:'',
    }
  },
  methods:{
    cz(){
      this.$router.push('../payCheck');
    },
    czrecord(){
      this.$router.push('/userinfo/payRecord');
    }, async changeps() {
      // 检查新密码和确认密码是否一致
      if (this.newpas !== this.newpas2) {
        console.log('新密码与确认密码不一致');
        this.$message.error("两次输入的密码不一致！");
        return;
      }
      // 发送异步请求到后端，进行密码匹配和修改操作
      await axios.get('http://8.142.36.198:3000/' + window.sessionStorage.getItem('username')+'/'+ genPassword(this.oldpas)+'/'+1+'/'+1)
        .then(response => {
          console.log(response.data)
          const userPwd = response.data;
          if ((userPwd.data["user_pwd"]) === genPassword(this.oldpas)) {
            // 旧密码匹配成功，执行密码修改操作
            axios.post('http://8.142.36.198:3000/'+ window.sessionStorage.getItem('username')+'/'+this.newpas+'/'+1)
              .then(response => {
                console.log('密码修改成功');
                this.$message.success('修改成功！');
                this.oldpas='';
                this.newpas='';
                this.newpas2='';
                // 在此处可以执行密码修改成功后的操作，例如显示成功消息、跳转页面等
              })
              .catch(error => {
                console.error(error,1);
                this.$message.error('密码错误！服务器崩溃！请重启服务器！');

                // 处理密码修改失败的情况
              });
          } else {
            console.log('旧密码不匹配');
            // 在此处可以执行旧密码不匹配的操作，例如显示错误消息等
            this.$message.error('旧密码错误！');
          }
        })
        .catch(error => {
          console.error(error,2);
          this.$message.error('密码错误！服务器崩溃！请重启服务器！');
          // 处理请求错误的情况
        });
    },

            //   // 读取数据库用户密码和输入的新密码进行比较然后更改
            //   changeps(){
            //     //获取用户输入的密码
            //     var oldpas = this.oldpas;
            //     var newpas = this.newpas;
            //     var newpas2 = this.newpas2;
            //     //异步请求
            //     axios.get('http://8.142.36.198:3000/'+oldpas)
            //           .then(response => {
            //             // 处理响应数据
            //           console.log(response.data.user_pwd);

            //           })
            //           .catch(error => {
            //             // 错误处理
            //           console.error(error);
            //           });

            //     //进行新密码比较
            //    if(this.newpas=="" || this.newpas2=="" || this.oldpas==""){
            //       this.$message.error('密码不能为空！');
            //     }
            //     else if(this.newpas!=this.newpas2){
            //       this.$message.error("两次输入的密码不一致！");
            //     //输入密码不能为空
            //     }
            //     //将数据库获取的密码与old密码进行比对
            //     else if(this.oldpas=="123456") {
            //       this.$message.success("修改密码成功");
            //       this.oldpas='';
            //       this.newpas='';
            //       this.newpas2='';
            //       //将数据库的用户密码进行修改
                  
            //     } else{
            //       this.$message.error("旧密码不正确！请重新输入");
            //     }
            // }


  }
}

</script>

<style scoped>
/* 头像部件设置 */
.self{
    height: 80vh;
    /* overflow: hidden; */
    min-width: 500px;
    min-height: 500px;
}
.self1{
    display: flex;
    height: 200px;
    /* margin-top: 5%; */
    min-width:1200px;
}
.self-img{
    position: relative;
    top: -15px;
    /* left: -9vh; */
    
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
    height:0px;
  }
  .clearfix:after {
    clear: both
  }
/* 卡片整体设置 */
  .box-card {
    flex: 1;
    width: 430px;
    height: 18vh;
    /* display: flex; */
    flex-direction: column;
    /* place-content: center center; */
    margin-left: 20%;  
  }
  .money{
    flex: 1;
    display: inline-block;
    font-size:1.3vw;
    font-weight: bold;
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
