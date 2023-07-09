<template>
    <div class="problemsWindow">
        <el-container 
        style="height: 100%;">
            <el-aside>
                <el-container style="height: 100%;">
                    <el-aside width="90%">
                        <!-- 题目 -->
                        <div class="problemGet">
                            <div 
                            v-for="i in (problemsSum-(pageSelect-1)*50)>50?50:(problemsSum-(pageSelect-1)*50)" 
                            :class="className[(i-1)%50]"
                            @click="toTheProblem((pageSelect-1)*50+i)">
                                {{i+(pageSelect-1)*50}}
                            </div>
                        </div>
                        <div class="pageGet">
                            <el-pagination
                            @current-change="toThePage"
                            layout="prev, pager, next"
                            :total="(page)*10"
                            :small="true">
                            </el-pagination>
                        </div>
                    </el-aside>
                    <el-main  class="scrollBar">
                        <!-- 滚动条 -->
                        <el-slider
                          v-model="value"
                          vertical
                          height="480px"
                          :disabled="isDisabled"
                          :show-tooltip="false">
                        </el-slider>
                    </el-main>
                </el-container>         
            </el-aside>
            <el-main class="problemDescribe">
                <!-- 首部导航 -->
                <el-menu 
                ref="menuRef"
                mode="horizontal" 
                active-text-color="#409EFF"
                :router="true">
                    <el-menu-item :index="getIndex">题目描述</el-menu-item>
                    <el-menu-item :index="goToComment">评论</el-menu-item>
                </el-menu>
                <router-view/>
                <!-- 题目描述 -->
            </el-main>
        </el-container>
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
        name:'problems',
        data(){
            return{
                problemsSum:160,
                value:100,
                page:10,
                pageSelect:1,
                preSelect:-1,
                className:Array(50).fill('problemId'),
                isDisabled:true,
                groupId:-1, // 题组序号
            }
        },
        methods:{
            toTheProblem:function(index){
                // 确保数据为响应式更新
                if(this.preSelect !=-1) this.$set(this.className,(this.preSelect-1)%50,'problemId')                // 记录当前选择的题目
                this.preSelect=index
                // 响应更新样式
                this.$set(this.className,(index-1)%50,'problemId active')
                this.$router.push({
                    path:`/problems/`+this.$route.params.groupId+`/describe/${this.preSelect}`
                })
            },
            toThePage(i){
                this.pageSelect=i
                this.$set(this.className,(this.preSelect-1)%50,'problemId')
                this.preSelect=(this.pageSelect-1)*50+1
                this.$set(this.className,(this.preSelect-1)%50,'problemId active')
                this.$router.push(`/problems/`+this.$route.params.groupId+`/describe/${this.preSelect}`)
            },
            async getDataNum(){
                let groupId = this.$route.params.groupId+1
                let url='http://localhost:3000/problem/'+groupId
                let data=await api.doGet(url)
                // console.log(data)
                this.problemsSum = data.data.length
                this.page=Math.floor(this.problemsSum/50)
                // let groupId = this.$route.params.groupId+1
                // axios.get('http://localhost:3000/problem/'+groupId)
                // .then(response => {
                //     // 处理响应数据
                //     this.problemsSum
                //     console.log(this.problemsSum)
                //     // console.log(this.problemsSum)
                //     // console.log(response.data.data);
                // })
                // .catch(error => {
                //   // 错误处理
                //   console.error(error);
                // });
            }
        },
        beforeRouteUpdate(to, from, next) {
            const currentId = this.$route.params.id; // 当前的 ID
            const nextId = to.params.id; // 即将切换到的 ID
            if (currentId !== nextId) {
                // 激活导航栏 problem的选项
                this.$refs.menuRef.activeIndex = to.path
            }next();
        },
        mounted(){
            this.getDataNum()   // 获取题目数
            this.$set(this.className,0,'problemId active')
            this.preSelect=1
            this.$router.push('/problems/'+this.$route.params.groupId+'/describe/1')
            this.groupId=this.$route.params.groupId // 路由传参，题目组序号
            this.$refs.menuRef.activeIndex = this.$route.path;  // 默认显示样式
            this.page= Math.floor(this.problemsSum/50)  // 获取页数
        },computed:{
            getIndex(){
                return `/problems/`+this.groupId+`/describe/${this.preSelect}`
            },
            goToComment(){
                return `/problems/`+this.groupId+`/comment`
            },
        },
    }
</script>
<style scoped>
    *div{
        display:inline-block
    }
    .problemsWindow{
        width: inherit;
        height: 100%;
    }
    .problemGet{
        margin-top: 5%;
        padding: 10%;
        display: grid;
        height: 60%;
        place-content: center center;
        grid-template-columns: repeat(5,30px);
        grid-template-rows: repeat(10,30px);
        gap:10px;
    }
    .problemId{
        display: flex;
        justify-content:center;
        align-items: center;
        width: 30px;
        height: 30px;
        border: 2px solid #66B1FF;
        border-radius: 5px;
        color: #606266;
    }
    .problemId.active{
        background-color: #A0CFFF;
        color:white
    }.problemId.finish{
        background-color: #409EFF;
        color:white;
    }
    .pageGet{
        display: flex;
        justify-content: center;
        align-items: center;
        height:8vh;
    }
    .scrollBar{
        padding: 0;padding-top: 5%;overflow: hidden;
    }
    .problemDescribe{
        background-color: white;
        border-radius: 25px;
        padding-top: 0;
        min-width: 500px;
    }
</style>