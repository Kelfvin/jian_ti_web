<template>
    <div class="problemNow" v-if="this.problemTable.length">
        <div style="line-height: 30px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{this.nowSelect}}.
            {{this.problemTable[this.nowSelect-1]['题目内容']}}
        </div>
        <div class="problemChoice" v-if="this.problemTable.length">
            <!-- <div v-for="(item, index) in options" class="problemChoiceItem" :key="index"> -->
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项A']">
                <input type="radio" name="options" :value="1">
                <label :for="1">A.
                {{this.problemTable[this.nowSelect-1]['选项A']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项B']">
                <input type="radio" name="options" :value="2">
                <label :for="2">B.
                {{this.problemTable[this.nowSelect-1]['选项B']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项C']">
                <input type="radio" name="options" :value="3">
                <label :for="3">C.
                {{this.problemTable[this.nowSelect-1]['选项C']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项D']">
                <input type="radio" name="options" :value="4">
                <label :for="4">D.
                {{this.problemTable[this.nowSelect-1]['选项D']}}
                </label>
            </div>
        </div>
        <div style="text-align: center;padding:1%">
            <el-button type="primary" plain @click="getData">提交</el-button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default{
        name:'ProblemsDescribe',
        data(){
            return{
                problemTable:[],
                problemsTable:[],
                nowSelect:1,
                options:null
            }
        },mounted() {
            this.$set(this, "nowSelect",this.$route.params.id);
            this.getData();
        },beforeRouteUpdate(to, from, next) {
            const currentId = this.$route.params.id; // 当前的 ID
            const nextId = to.params.id; // 即将切换到的 ID
            if (currentId !== nextId) {
                this.nowSelect = nextId;
            } next();
        },methods: {
            async getData(){
                let groupId=this.$route.params.groupId+1
                await axios.get('http://localhost:3000/problem/'+groupId)
                .then(response => {
                  // 处理响应数据
                    this.problemTable=response.data.data
                    // console.log(this.problemTable)
                    this.options=Array.from({ length: 4 }, () => Array(50))
                    for(var i=0;i<this.problemTable.length;i++){
                        this.options[0][i]=this.problemTable[i]['选项A']
                        this.options[1][i]=this.problemTable[i]['选项B']
                        this.options[2][i]=this.problemTable[i]['选项C']
                        this.options[3][i]=this.problemTable[i]['选项D']
                    }
                //   console.log(this.options)
                //   console.log(this.problemTable)
                //   console.log(response.data.data);
                })
                .catch(error => {
                  // 错误处理
                  console.error(error);
                });
                
            },
        }
    }
</script>
<style scoped>
    .problemNow{
        padding: 5vh;
        height: 50vh;
        width: inherit;
        font-size:medium;
        font-weight:300;
    }
    .problemChoice{
        padding: 5%;
        display: flex;
        height: 20vh;
        flex-direction: column;
    }
    .problemChoiceItem{
        flex: 1;
    }
</style>