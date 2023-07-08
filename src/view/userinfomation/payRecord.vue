<template>
        <div class="Allside">
        <div class="upside" style="width: 100%;height: 10vh; ">
            <h2 style="font-size: 30px;"><i class="el-icon-search"></i>充值记录</h2>
            <el-page-header @back="goBack" title="返回个人资料">
            </el-page-header>
            <el-divider/>
        </div>
        <div class="downside" style="margin-top: 5vh;">
            <el-input
                style="width: 20%;margin-right:5vh;margin-bottom: 3vh;"
                placeholder="请输入查询日期（格式为xxxx-xx-xx）"
                v-model="dataSearch"
                clearable>
            </el-input>
            <el-button type="primary" icon="el-icon-search" @click="reSetSearch()">重置查询日期</el-button>
            <el-table
                :default-sort = "{prop: 'date', order: 'descending'}"
                height="500"
                :data="filteredTableData"
                stripe
                style="width: 90%;border-radius: 20px;">
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
        dataSearch:'',
        // 从数据库拿取信息（待改）
        tableData: [
            {date: '2023-7-2',username: '周涛',money: '300R'}, 
            {date: '2023-7-4',username: '周涛',money: '500R'}, 
            {date: '2023-7-5',username: '周涛',money: '800R'}, 
            {date: '2023-7-8',username: '周涛',money: '100R'},
                   ]
             }
            },
    computed: {
          filteredTableData() {
          // 根据输入的日期过滤表格数据
          const searchDate = this.dataSearch.trim();
            if (!searchDate) {
          // 如果输入的日期为空，则返回全部数据
            return this.tableData;
            } else {
          // 否则，返回与输入日期匹配的数据
            return this.tableData.filter((item) => item.date === searchDate);
          }
      },
  },
    methods:{
        goBack(){
            this.$router.push('/userinfo');
        },
        reSetSearch(){
          //重置查询日期
            this.dataSearch = '';

        }
    }
}
</script>


<style scoped>

</style>