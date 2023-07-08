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
              property="problemGroup"
              label="题组名"
              width="800">
            </el-table-column>
            <el-table-column
              property="problemCount"
              label="题目数"
              width="200">
            </el-table-column>
        </el-table>
      <div class="upload-container">
        <component :is="upload"></component>
      </div>
    </div>

</template>
<script>
import uploadFile from "@/view/uploadFile";
    export default{
        name:'choicePage',
        data(){
            return{
                upload:uploadFile,
                tableData: [{
                    problemGroup: '七天速通全栈,我觉得这就是一种成理自信',
                    problemCount: '∞',
                }, {
                    problemGroup: '七天速通全栈,我觉得这就是一种成理自信',
                    problemCount: '∞',
                }, {
                    problemGroup: '七天速通全栈,我觉得这就是一种成理自信',
                    problemCount: '∞',
                }, {
                    problemGroup: '七天速通全栈,我觉得这就是一种成理自信',
                    problemCount: '∞',
                }],
                }
        },methods: {
            setCurrent(row) {
                console.log(this.tableData.indexOf(row))
                this.$router.push('/problems/'+this.tableData.indexOf(row)+'/describe/1')
                this.$refs.singleTable.setCurrentRow(row);
            },
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
        padding: 5%;    }
</style>