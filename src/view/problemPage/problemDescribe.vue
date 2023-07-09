<template>
    <div class="problemNow" v-if="this.problemTable">
        <div style="line-height: 30px;">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p v-if="this.problemTable[this.nowSelect-1]&&this.problemTable[this.nowSelect-1]['题目内容']">{{this.nowSelect}}.
                {{this.problemTable[this.nowSelect-1]['题目内容']}}
            </p>
        </div>
        <div v-show="showAnswer" v-if="isRight" :message="message" style="color:green;padding-left: 3%;">{{message}}</div>
        <div v-show="showAnswer" v-if="!isRight" :message="message" style="color:red;padding-left: 3%;">{{message}}</div>
        <div class="problemChoice" v-if="this.problemTable.length" name="choice">
            <!-- <div v-for="(item, index) in options" class="problemChoiceItem" :key="index"> -->
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项A']">
                <input type="radio" id="A" name="options" value="A" v-model="selectChoose">
                <label for="A">A.
                {{this.problemTable[this.nowSelect-1]['选项A']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项B']">
                <input type="radio" id="B" name="options" value="B" v-model="selectChoose">
                <label for="B">B.
                {{this.problemTable[this.nowSelect-1]['选项B']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项C']">
                <input type="radio" id="C" name="options" value="C" v-model="selectChoose">
                <label for="C">C.
                {{this.problemTable[this.nowSelect-1]['选项C']}}
                </label>
            </div>
            <div class="problemChoiceItem" v-if="this.problemTable[this.nowSelect-1]['选项D']">
                <input type="radio" id="D" name="options" value="D" v-model="selectChoose">
                <label for="D">D.
                {{this.problemTable[this.nowSelect-1]['选项D']}}
                </label>
            </div>
        </div>
        <div style="text-align: center;padding:1%">
            <el-button type="primary" plain @click="compareData">提交</el-button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    let api=axios.create({
        timeout:500000
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
        name:'ProblemsDescribe',
        data(){
            return{
                problemTable:[],
                nowSelect:1,
                options:null,
                message:'',
                selectChoose:'',
                showAnswer:true,
                isRight:true,
                trueProblem:0,
                falseProblem:0
            }
        },mounted() {
            this.selectChoose=''
            this.message=''
            this.showAnswer = false
            this.$set(this, "nowSelect",this.$route.params.id);
            this.getData();
            this.trueProblem=0,
            this.falseProblem=0
        },beforeRouteUpdate(to, from, next) {
            const currentId = this.$route.params.id; // 当前的 ID
            const nextId = to.params.id; // 即将切换到的 ID
            if (currentId !== nextId) {
                this.message=''
                this.showAnswer = false
                this.selectChoose=''
                this.nowSelect = nextId;
            } next();
        },methods: {
            async getData(){
                let data=null;
                try{
                    let groupId=this.$route.params.groupId+1
                    let url='http://localhost:3000/problem/'+groupId
                    data=await api.doGet(url)
                    
                }catch(e){
                    console.log(e.message)
                }
                this.$nextTick(()=>{
                    this.problemTable = data.data
                });
                
                // console.log(data)
                
                // console.log(this.problemTable);
            },compareData(){
                this.showAnswer=true
                if(this.problemTable[this.nowSelect-1]['正确选项']==this.selectChoose) {
                    this.message='正确,答案为'+this.selectChoose
                    this.trueProblem++
                    this.isRight=true
                }else{
                    this.message='错误,正确答案为'+this.problemTable[this.nowSelect-1]['正确选项']
                    this.falseProblem++
                    this.isRight=false
                }
                if(this.problemTable.length==this.$route.params.id) this.message='已完成全部题目,其中正确:'+this.trueProblem+'道,错误:'+this.falseProblem+'道'
                this.$emit("isFinish")
            }
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