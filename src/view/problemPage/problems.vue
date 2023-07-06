<template>
    <div class="problemsWindow">
        <el-container style="height: 100%;">
            <el-aside>
                <el-container style="height: 100%;">
                    <el-aside width="90%" style="display: flex;flex-direction: column;">
                        <!-- 题目 -->
                        <div class="problemGet">

                        </div>
                        <div class="pageGet">
                            <el-pagination
                            layout="prev, pager, next"
                            :total="page"
                            small="'true">
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
                mode="horizontal" 
                active-text-color="#409EFF"
                :router="true">
                    <el-menu-item index="/Main/problems/describe">题目描述</el-menu-item>
                    <el-menu-item index="/Main/problems/comment">评论</el-menu-item>
                </el-menu>
                Main
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
                isDisabled:true
            }
        },
        methods:{
            
        },
        mounted(){
            // this.$router.push('describe')
        }
    }
</script>
<style scoped>
    *div{
        display:inline-block
    }
    .problemsWindow{
        width: inherit;
        height: 100%;
        /* background-color: red; */
    }
    .problemGet{
        height: 80%;
        /* border-radius: 25px; */
    }
    .pageGet{
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .scrollBar{
        padding: 0;padding-top: 5%;overflow: hidden;
    }
    .problemDescribe{
        background-color: white;
        border-radius: 25px;
        padding-top: 0;
    }
</style>