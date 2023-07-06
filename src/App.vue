<template>
  <div id="app">
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components:{

  },
  data:()=>{
    return{}
  }
}

</script>

<style>
html,body,#app{
  margin: 0;
  padding: 0;
  height: 100%;
  background: #F5F5F5;
}

.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 48
}

</style>