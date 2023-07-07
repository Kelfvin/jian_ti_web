<template>
    <div class="problemNow">
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {{this.nowSelect}}.你说的对，但是《你说的对》是由你说的对自主研发的一款全新你说的对。你说的对发生在一个被称作「你说的对」的你说的对世界，在这里被你说的对选中的你说的对将被授予「你说的对」，引导你说的对之力。你将扮演一位名为「你说的对」的神秘角色，在自由的旅行中邂逅你说的对、你说的对的你说的对们，和你说的对一起击败你说的对，寻找失散的你说的对，同时，逐步发掘「你说的对」的真相。
        </div>  
        <div class="problemChoice">
            <div v-for="(item, index) in options" class="problemChoiceItem">
                <input type="checkbox" name="options" :value="index">
                <label :for="index">{{String.fromCharCode('A'.charCodeAt(0) + index)}}.{{item}}</label>
            </div>
        </div>
        <div style="text-align: center;">
            <el-button type="primary" plain>提交</el-button>
        </div>
    </div>
</template>
<script>
    export default{
        name:'ProblemsDescribe',
        data(){
            return{
                nowSelect:1,
                options:Array(4).fill('嗯?')
            }
        },mounted() {
            this.$set(this, "nowSelect",this.$route.params.id);
        },beforeRouteUpdate(to, from, next) {
            const currentId = this.$route.params.id; // 当前的 ID
            const nextId = to.params.id; // 即将切换到的 ID
            if (currentId !== nextId) {
                this.nowSelect = nextId;
            } next();
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