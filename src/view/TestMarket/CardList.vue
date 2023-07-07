
<template>
    
    <div class="form">
        <el-row :span="6" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
            <el-col :span="6" v-for="(o, index) in 3" :key="o" :offset="index > 0 ? 2 : 0">
                <el-card :body-style="{ padding: '14px' }" class="CardList">
                    <div slot="header" class="clearfix">
                        <img src="@/assets/CardIcon.png" class="image">
                        <!--超过18汉字字符，应当省略-->
                        <span>某某题库</span>
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
        </el-row>
    </div>
</template>

<script >
export default {
    methods:{
        onclick(){
            this.$router.push('/CardList/Detail');
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