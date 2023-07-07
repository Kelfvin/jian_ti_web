<template>
        <div class="Allside">
        <div class="upside" style="width: 100%;height: 10vh; ">
            <h2 style="font-size: 30px;"><i class="el-icon-search"></i>充值记录</h2>
            <el-page-header @back="goBack" title="返回个人资料">
            </el-page-header>
            <el-divider/>
        </div>
        <div class="downside" style="margin-top: 5vh;">
            <el-table
                :default-sort = "{prop: 'date', order: 'descending'}"
                height="500"
                :data="tableData"
                stripe
                style="width: 90%;border-radius: 10px;">
            <el-table-column
                prop="date"
                label="日期"
                width="300">
            </el-table-column>
            <el-table-column
                prop="username"
                label="充值账户"
                width="300">
            </el-table-column>
            <el-table-column
                prop="money"
                label="充值金额">
            </el-table-column>
            </el-table>   
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        // 从数据库拿取信息（待改）
        tableData: [{
          date: '2023-7-2',
          username: '周涛',
          money: '300R'
        }, {
          date: '2023-7-4',
          username: '周涛',
          money: '500R'
        }, {
          date: '2023-7-5',
          username: '周涛',
          money: '800R'
        }, {
          date: '2023-7-8',
          username: '周涛',
          money: '100R'
        }]
      }
    },
    methods:{
        goBack(){
            this.$router.push('/userinfo');
        },
    }
}
</script>


<style scoped>

</style>