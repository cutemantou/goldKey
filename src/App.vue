<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
*{margin:0;padding:0}
html, body {overflow-x: auto;min-width: 1200px;width: 100%;}
body {font-size: 14px;line-height: normal;font-family: 微软雅黑, "Microsoft Yahei";min-width: 1200px;width: 100%;background:#fff;color:#333;}
body.greback{background:#f5f5f5;}
ul,li{list-style:none;}
a{text-decoration:none;}
h1,h2{margin:0;padding:0;}
input{outline:none;border:none;}
input[type="button"] {-webkit-appearance:none;}
a {text-decoration:none;}
.wd1000{width:1000px;margin:0 auto;}
.wd1100{width:1100px;margin:0 auto;}
.wd1200{width:1200px;margin:0 auto;}
.wd1300{width:1300px;margin:0 auto;}
.wd1400{width:1400px;margin:0 auto;}
.clearfix:after{content:"";display:block;visibility:hidden;clear:both;height:0;}
.clearfix{zoom:1;}
i{font-style:normal;}
</style>
