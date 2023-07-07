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