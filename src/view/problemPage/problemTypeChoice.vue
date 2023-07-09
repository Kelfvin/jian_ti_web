<template>
    <div class="choiceWindow">
        <el-table
        ref="singleTable"
        :data="tableData"
        highlight-current-row
        @current-change="setCurrent"
        style="width: 100%">
            <el-table-column
              type="index"
              width="50">
            </el-table-column>
            <el-table-column
              property="题组名"
              label="题组名"
              width="800">
            </el-table-column>
            <el-table-column
              property="题目数"
              label="题目数"
              width="200">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
    import axios from 'axios';
    let api=axios.create({
        timeout:50000
    })
    api.interceptors.response.use(response=>{
        return response
    },(error)=>{
        return error.response
    })

    api.doGet=async(url)=>{
        let {data}=await api.get(url)
        return data
    }
    api.doPost=async(url,param)=>{
        let {data}=await api.post(url)
        return data
    }
    export default{
        name:'choicePage',
        data(){
            return{
                tableData: []
                }
        },methods: {
            setCurrent(row) {
                this.$router.push('/problems/'+this.tableData.indexOf(row)+'/describe/1')
                this.$refs.singleTable.setCurrentRow(row);
            },
            async getData(){
                let url='http://8.142.36.198:3000/problemGroup'
                let data=await api.doGet(url)
                this.tableData=data.data
                // console.log(this.tableData)
            }
        },mounted() {
            this.getData()
        },
    }
</script>
<style scoped>
    .upload-container{
      position: absolute;
      top: calc(2/4 * 100%);
      left: 50%;
      }
    .choiceWindow {
        width: inherit;
        height: 70vh;
        border-radius: 25px;
        background-color: white;
        padding: 5%;    
    }
</style>