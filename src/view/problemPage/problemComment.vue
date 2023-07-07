<template>
    <div class="commentWindow">
        <div class="OtherComment">
            <div class="comment" v-for="i in 5" :key="i">
                <p>用户名：</p>
                {{i}}
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
                text:''
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
        padding: 5%;
        width: inherit;
        height: 80%;
        overflow-x: hidden;
        overflow-y: scroll;
        /* min-height: 500px; */
    }
    .submitComment{
        text-align: center;
    }
    .comment{
        display: inline-block;
        width: 80%;
        height: auto;
        padding: 0 5%;
        word-wrap: break-word;
    }
</style>