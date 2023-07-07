<template>
    <div class="problemsWindow">
        <el-container style="height: 100%;">
            <el-aside>
                <el-container style="height: 100%;">
                    <el-aside width="90%">
                        <!-- 题目 -->
                        <div class="problemGet">
                            <div 
                            v-for="i in 50" 
                            :class="className[(i-1)%50]"
                            @click="toTheProblem(i)">
                                {{i}}
                            </div>
                        </div>
                        <div class="pageGet">
                            <el-pagination
                            layout="prev, pager, next"
                            :total="page"
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
    export default{
        name:'problems',
        data(){
            return{
                value:100,
                page:1,
                preSelect:-1,
                className:Array(50).fill('problemId'),
                isDisabled:true,
                groupId:-1,
            }
        },
        methods:{
            toTheProblem:function(index){
                // 确保数据为响应式更新
                if(this.preSelect !=-1) this.$set(this.className,this.preSelect-1,'problemId')
                // 记录当前选择的题目
                this.preSelect=index
                // 响应更新样式
                this.$set(this.className,index-1,'problemId active')
                this.$router.push({

                    path:`/problems/`+this.$route.params.groupId+`/describe/${this.preSelect}`
                })
            },
            
        },
        beforeRouteUpdate(to, from, next) {
            const currentId = this.$route.params.id; // 当前的 ID
            const nextId = to.params.id; // 即将切换到的 ID
            if (currentId !== nextId) {
                // 激活导航栏 problem的选项
                    this.$refs.menuRef.activeIndex = to.path
            }
             next();
        },
        mounted(){
            this.$set(this.className,0,'problemId active')
            this.preSelect=1
            this.$router.push('/problems/'+this.$route.params.groupId+'/describe/1')
            this.groupId=this.$route.params.groupId
            this.$refs.menuRef.activeIndex = this.$route.path;
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