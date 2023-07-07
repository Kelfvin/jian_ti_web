<template>
    <div class="page">
        <el-card :body-style="{ padding: '20px' }" calss="BuyNow">
            <el-button type="primary" plain @click="onclick()">返回市场</el-button>
            <el-button type="primary" plain>想看题库内更多习题？立即购买！</el-button>
        </el-card>
        <el-row :span="6" v-for="(o, index) in 5" :key="o" :offset="index > 0 ? 2 : 0">
            <el-card :body-style="{ padding: '100px'}" class="sampleQuestion">
                <span>试题{{index+1}}</span><br>
                <span>被视为朴素唯物主义先驱的是以下哪位？</span>
                <span>试题{{index+1}}</span><br><br>
                <span>被视为朴素唯物主义先驱的是以下哪位？</span><br><br><br>
                <el-button plain spam="10" class="choose">A{{ "泰勒斯" }}</el-button>
                <el-button plain span="10" class="choose">B{{ "德拉克利特" }}</el-button>
                <el-button plain span="10" class="choose">C{{ "德谟赫利特" }}</el-button>
                <el-button plain span="10" class="choose">D{{ "巴门尼德" }}</el-button>
            </el-card>
        </el-row>
    </div>	
</template>

<script>
export default {
    name:'DetailPage',
    methods:{
    onclick(){
        this.$router.push('/CardList');
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