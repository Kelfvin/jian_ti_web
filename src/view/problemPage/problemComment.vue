<template>
    <div class="commentWindow">
        <div class="OtherComment">
            <div class="comment" v-for="(item,index) in comment" :key="index">
                <div class="commentHeader">
                    <div class="userAvatar">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    </div>
                    <div class="userInfo" v-if="comment[index]['用户名']">
                            {{comment[index]['用户名']}}<br><br>
                            <p v-if="comment[index]['评论时间']">{{new Date(comment[index]['评论时间'])}}</p>
                    </div>
                </div>
                <div class="commentBody" v-if="comment[index]['评论内容']">
                    &nbsp;&nbsp;&nbsp;&nbsp;{{comment[index]['评论内容']}}
                </div>
                <div class="commentFooter">
                    <!-- <el-collapse>
                        <el-collapse-item name="1">
                            <template #title>
                                <div class="title-container">
                                    <i class="el-icon-chat-line-round"></i>
                                    <span>回复</span>
                                </div>
                            </template>
                            <div class="responseComment" v-for="i in 5">
                                <el-divider></el-divider>
                                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
                            </div>
                            <el-input
                            prefix-icon="el-icon-chat-line-round"
                            style="width: 20vw;"
                            type="commentResponse"
                            placeholder="在这里留下你宝贵的回复吧"
                            v-model="commentResponse"
                            maxlength="100"
                            size="large"
                            show-word-limit/>
                            <div style="display: inline-block;width: 1vw;"></div>
                            <el-button type="primary">回复</el-button>                     
                        </el-collapse-item>
                    </el-collapse> -->
                    
                </div>
                <hr>
            </div>
        </div>
        <div class="submitComment">
            <el-input
            style="width: 20vw;"
            type="text"
            placeholder="请输入内容"
            v-model="text"
            maxlength="100"
            size="large"
            show-word-limit/>
            <div style="display: inline-block;width: 1vw;"></div>
            <el-button type="primary" round>提交</el-button>
        </div>
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
        name:'ProblemsComment',
        data(){
            return{
                text:'',
                circleUrl:'',
                commentResponse:'',
                comment:[]
            }
        },mounted(){
            this.getComment()
        },methods: {
            async getComment(){
                let groupId = this.$route.params.groupId+1
                let url='http://8.142.36.198:3000/problemComment/'+groupId
                let data=await api.doGet(url)
                this.comment=data.data
                console.log(this.comment)
            }
        },
    }
</script>
<style scoped>
    .commentWindow{
        min-width: 25vw;
        min-height: 400px;
        height: 50vh;
        flex-wrap: nowrap;
    }
    .OtherComment{
        /* padding: 5%; */
        width: inherit;
        height: 90%;
        overflow-x: hidden;
        overflow-y: scroll;
        /* min-height: 500px; */
    }
    .submitComment{
        padding: 1%;
        text-align: center;
    }
    .comment{
        display: inline-block;
        width: 80%;
        height: auto;
        padding: 0 5%;
        word-wrap: break-word;
    }
    .commentHeader{
        color:#606266;
    }
    .userInfo{
        display: inline-block;
        padding: 4% 4% 0 4%;
    }
    .userAvatar{
        display: inline-block;
        padding: 4% 0 0 4%;
    }
    .commentBody{
        padding: 5%;
        height: auto;
        line-height: 20px;
    }
    .commentFooter{
        height: auto;
    }
    .responseComment{
        margin: 15px;
        color: #C0C4CC;
    }
    .submitComment >>>.el-input__inner{ /* 穿透scoped */
        border-radius: 25px;
    }
</style>