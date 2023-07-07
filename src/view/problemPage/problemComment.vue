<template>
    <div class="commentWindow">
        <div class="OtherComment">
            <div class="comment" v-for="i in 5" :key="i">
                <div class="commentHeader">
                    <div class="userAvatar">
                        <el-avatar :size="40" :src="circleUrl"></el-avatar>
                    </div>
                    <div class="userInfo">
                            用户名<br><br>
                            2023-7-7
                    </div>
                </div>
                <div class="commentBody">
                    &nbsp;&nbsp;{{i}}:你说的对，但是《你说的对》是由你说的对自主研发的一款全新你说的对。你说的对发生在一个被称作「你说的对」的你说的对世界，在这里被你说的对选中的你说的对将被授予「你说的对」，引导你说的对之力。你将扮演一位名为「你说的对」的神秘角色，在自由的旅行中邂逅你说的对、你说的对的你说的对们，和你说的对一起击败你说的对，寻找失散的你说的对，同时，逐步发掘「你说的对」的真相。
                    <i class="el-icon-chat-line-round"></i>
                    <i class="el-icon-thumb"></i>
                </div>
                <div class="commentFooter">
                    <el-collapse>
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
                            type="text"
                            placeholder="在这里留下你宝贵的回复吧"
                            v-model="text"
                            maxlength="100"
                            size="large"
                            show-word-limit/>
                            <div style="display: inline-block;width: 1vw;"></div>
                            <el-button type="primary">回复</el-button>                     
                        </el-collapse-item>
                    </el-collapse>
                    
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
    export default{
        name:'ProblemsComment',
        data(){
            return{
                text:'',
                circleUrl:''
            }
        }
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
</style>