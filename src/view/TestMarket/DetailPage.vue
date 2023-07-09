<template>
    <div class="page">
        <el-card :body-style="{ padding: '20px' }" calss="BuyNow">
            <el-button type="primary" plain @click="onclick()">返回市场</el-button>
            <el-button type="primary" plain @click="check()">查看例题</el-button>
            <el-button type="primary" plain>想看题库内更多习题？立即购买！</el-button>
        </el-card>
        <el-row :span="6" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '100px'}" style="margin-top:10px" class="sampleQuestion">
                <span>题库名:{{num}}</span><br><br>
                <span>试题{{index+1}}</span><br><br>
                <span>{{question[5*index]}}</span><br><br><br>
                <el-button plain spam="10" class="choose">A{{question[5*index+1]}}</el-button>
                <el-button plain span="10" class="choose">B{{question[5*index+2]}}</el-button>
                <el-button plain span="10" class="choose">C{{question[5*index+3]}}</el-button>
                <el-button plain span="10" class="choose">D{{question[5*index+4]}}</el-button>
            </el-card>
        </el-row>
    </div>	
</template>

<script>
import axios from "axios"
export default {
    name:'DetailPage',
    data(){
        return{
            question:[],
            num:-1
        }
    },
    mounted(){
      this.getParams();
      this.getNames();
    },
    methods:{
    onclick(){
        this.$router.push('/CardList');
    },
    async getParams(){
        // 取到路由带过来的参数
        this.num = this.$route.params.index;
    },
    check(){

    },
    //业务处理
    async getNames(){
            axios.get('http://8.142.36.198:3000/sysapi/cardListDetail')
            .then(response=>{
                this.question=response.data.data;
            })
    },
    watch: {
      '$route': 'getParams'
    }
}
}
</script>

<style>
.BuyNow{
    width:100%;
}
.sampleQuestion{
    width:100%;
}
</style>