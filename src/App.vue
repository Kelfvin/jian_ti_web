<template>
  <div id="app">
  <router-view>
  </router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:()=>{
    return{}
  },mounted(){
    this.$router.push('/login')
  },
  devServer: {
        disableHostCheck: true,
    }
}

</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>