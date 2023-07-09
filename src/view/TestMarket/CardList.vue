
<template>
    
    <div class="form">
        <el-col :span="6" v-for="(index2) in names" :key="index2" :offset="1">
            <el-card :body-style="{ padding: '14px' }" style="margin-top:15px" class="CardList">
                <div slot="header" class="clearfix">
                    <img src="@/assets/CardIcon.png" class="image">
                    <!--超过18汉字字符，应当省略-->
                    <span>{{ index2 }}</span>
                </div>
                <div style="padding: 14px;">
                    <div class="bottom clearfix">
                        <!--info表示可以查看-->
                        <el-button type="info" plain @click="onclick()">查看</el-button>
                        <!--primary表示未购买，success表示已购买,同时设置为disabled-->
                        <el-button type="primary" plain >购买</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </div>
</template>

<script >
import axios from "axios"
export default {
    data(){
        return{
            names:[]
        }
    },
    mounted(){

        this.getNames();
    },
    methods:{
        onclick(index){
            this.$router.push({
                path:'/CardList/Detail'
                //query:{num:index}
            });
        },    
        //业务处理
        async getNames(){
            axios.get('http://8.142.36.198:3000/sysapi/cardList')
            .then(response=>{
                this.names=response.data.data;
            })
        }
    }
}
</script>

<style>
/*行排列 */
.el-row{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
/*卡片动画 */
.CardList {
    min-width: 380px;
    margin-right: 20px;
    transition: all .5s;
  }
  .CardList:hover{
    margin-top: -5px;
}
</style>